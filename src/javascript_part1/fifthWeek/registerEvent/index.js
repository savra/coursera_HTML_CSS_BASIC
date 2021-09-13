module.exports = {
    subscriptions: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.subscriptions[event]) {
            this.subscriptions[event] = [];
        }

        this.subscriptions[event].push({
            subscriber: subscriber,
            handler: handler
        });

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (!this.subscriptions[event]) {
            return this;
        }

        for (let i = 0; i < this.subscriptions[event].length; i++) {
            if (this.subscriptions[event][i].subscriber === subscriber) {
                this.subscriptions[event].splice(i, 1);
                i--;
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (!this.subscriptions[event]) {
            return this;
        }

        for(let i = 0; i < this.subscriptions[event].length; i++) {
            this.subscriptions[event][i].handler.call(this.subscriptions[event][i].subscriber);
        }

        return this;
    }
};
