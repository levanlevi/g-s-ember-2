import Component from '@ember/component';

export default Component.extend({
    tagName: 'th',
    classNameBindings: ['th_class'],
    th_class: Ember.computed('sort_by', 'current_sort', function () {
        if (this.get('sort_by') === this.get('current_sort'))
            return 'sorted';
        return '';
    }),
    actions: {
        sort() {
            this.get('sort_data')(this.get('sort_by'));
        }
    }
});
