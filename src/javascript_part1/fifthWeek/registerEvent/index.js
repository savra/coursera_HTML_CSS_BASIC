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
                let existSubscriber = false;
                for(let j = 0; j < this.events[i].handlers.length; j++) {
                    if (this.events[i].handlers[j].subscriber === subscriber) {

                    }
                }

                if (this.events[i].handlers.includes(subscriber))
                this.events[i].handlers.push({handler, subscriber});
                existsEvent = true;
                break;
            }
        }

        if (!existsEvent) {
            this.events.push({
                eventName: event,
                handlers: [{handler, subscriber}]
            });
        }



        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        for(let i = 0; i < this.events.length; i++) {
            if (this.events[i].eventName === event) {
                for(let j = 0; j < this.events[i].handlers.length; j++) {
                    if (this.events[i].handlers[j].subscriber === subscriber) {
                        this.events[i].handlers.splice(j, 1);
                        return this;
                    }
                }
            }
        }
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.events.filter((element) => element.eventName === event).flatMap((item) => item.handlers).forEach((handler) => {
            handler.handler.call(handler.subscriber);
        });

        return this;
    }
};
