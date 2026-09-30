/* OpenHealth5G — Client-side metadata filters (zero-latency) */
(function() {
  'use strict';

  function FilterEngine(bar) {
    this.bar = bar;
    this.groups = [];
    this.items = [];
  }

  /* Scan DOM for filter groups */
  FilterEngine.prototype.init = function() {
    var groups = this.bar.querySelectorAll('.filter-group');
    for (var i = 0; i < groups.length; i++) {
      var container = groups[i].querySelector('.filter-chips');
      this.groups.push({
        id: groups[i].getAttribute('data-group') || 'group-' + i,
        chipContainer: container,
        key: groups[i].getAttribute('data-key')
      });
    }
  };

  /* Scan items and extract available values */
  FilterEngine.prototype.discoverItems = function() {
    var self = this;
    var els = this.bar.parentElement.querySelectorAll('.filter-item');

    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var valueSets = [];

      for (var g = 0; g < this.groups.length; g++) {
        var raw = el.getAttribute('data-' + this.groups[g].key);
        if (raw) {
          var vals = raw.split(',').filter(Boolean).map(function(v) { return v.trim().toLowerCase(); });
          valueSets.push({ groupIdx: g, values: vals });
        }
      }

      this.items.push({ el: el, groupId: el.getAttribute('data-filter-group'), valueSets: valueSets });
    }
  };

  /* Generate chips from discovered values */
  FilterEngine.prototype.generateChips = function() {
    var self = this;

    /* Collect unique values per group */
    var valuesByGroup = [];
    for (var g = 0; g < this.groups.length; g++) {
      valuesByGroup[g] = {};
    }

    for (var i = 0; i < this.items.length; i++) {
      for (var v = 0; v < this.items[i].valueSets.length; v++) {
        var set = this.items[i].valueSets[v];
        for (var k = 0; k < set.values.length; k++) {
          var val = set.values[k];
          if (val && !valuesByGroup[set.groupIdx][val]) {
            valuesByGroup[set.groupIdx][val] = true;
          }
        }
      }
    }

    /* Build chips from discovered values */
    for (var g = 0; g < this.groups.length; g++) {
      var container = this.groups[g].chipContainer;
      var keys = Object.keys(valuesByGroup[g]);

      keys.forEach(function(val) {
        var chip = document.createElement('button');
        chip.className = 'filter-chip';
        chip.setAttribute('data-value', val);
        chip.setAttribute('data-group', self.groups[g].id);

        var dot = document.createElement('span');
        dot.className = 'chip-dot';
        chip.appendChild(dot);

        var label = document.createElement('span');
        label.textContent = formatChipLabel(val, self.groups[g].key);
        chip.appendChild(label);

        chip.addEventListener('click', (function(chip) {
          return function(e) {
            e.preventDefault();
            chip.classList.toggle('active');
            self.applyFilters();
          };
        })(chip));

        container.appendChild(chip);
      });
    }
  };

  /* Show/hide items based on active filter selections */
  FilterEngine.prototype.applyFilters = function() {
    /* Collect active values per group */
    var activeGroups = {};
    var chips = this.bar.querySelectorAll('.filter-chip.active');
    for (var i = 0; i < chips.length; i++) {
      var val = chips[i].getAttribute('data-value').toLowerCase();
      var group = chips[i].getAttribute('data-group');
      if (!activeGroups[group]) activeGroups[group] = {};
      activeGroups[group][val] = true;
    }

    /* Toggle visibility on items */
    for (var j = 0; j < this.items.length; j++) {
      var item = this.items[j];
      var show = true;

      for (var g = 0; g < this.groups.length; g++) {
        var groupId = this.groups[g].id;
        if (!activeGroups[groupId]) continue;

        var matched = false;
        for (var v = 0; v < item.valueSets.length; v++) {
          if (item.valueSets[v].groupIdx === g) {
            for (var k = 0; k < item.valueSets[v].values.length; k++) {
              if (activeGroups[groupId][item.valueSets[v].values[k]]) {
                matched = true;
                break;
              }
            }
            if (matched) break;
          }
        }
        if (!matched) { show = false; break; }
      }

      if (show) {
        item.el.classList.remove('hidden');
      } else {
        item.el.classList.add('hidden');
      }
    }

    /* Show/hide reset button */
    var resetBtn = this.bar.querySelector('.filter-reset');
    if (resetBtn) {
      chips.length > 0 ? resetBtn.classList.add('visible') : resetBtn.classList.remove('visible');
    }
  };

  FilterEngine.prototype.resetAll = function() {
    var chips = this.bar.querySelectorAll('.filter-chip.active');
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.remove('active');
    }
    this.applyFilters();
  };

  /* Values arrive lowercased; these keep their institutional/acronym casing. Add new ones here. */
  var ACRONYMS = ['ufrgs', 'ufcspa', 'pucrs', 'unisinos', 'utfpr', 'sla', 'ran', 'ai', 'ml', '5g', '6g'];

  function formatChipLabel(val, key) {
    if (key === 'year') return val;
    return val.split('-').map(function(w) {
      if (ACRONYMS.indexOf(w) !== -1) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  }

  /* Auto-init on DOM ready */
  document.addEventListener('DOMContentLoaded', function() {
    var bars = document.querySelectorAll('.filter-bar');
    for (var i = 0; i < bars.length; i++) {
      var engine = new FilterEngine(bars[i]);
      engine.init();
      engine.discoverItems();
      engine.generateChips();

      var resetBtn = document.createElement('button');
      resetBtn.className = 'filter-reset';
      resetBtn.textContent = '× Clear all filters';
      resetBtn.addEventListener('click', (function(engine) {
        return function() { engine.resetAll(); };
      })(engine));
      bars[i].appendChild(resetBtn);
    }
  });
})();
