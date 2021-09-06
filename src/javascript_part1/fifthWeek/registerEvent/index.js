module.exports = {
    events: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        let existsEvent = false;
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].eventName === event) {
                this.events[i].handlers.push(handler);
                existsEvent = true;
                break;
            }
        }

        if (!existsEvent) {
            this.events.push({
                eventName: event,
                subscriber: subscriber,
                handlers: [handler]
            });
        }



        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.events.filter((element) => element.eventName === event).forEach((element) => {

        });
        for (let i = 0; i < this.events.length; i++) {

        }

        return this;
    }
};
