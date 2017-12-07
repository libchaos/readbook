"use strict";
class HeatSensor {
    constructor(controlPanel) {
        this.controlPanel = controlPanel;
        this.upperLimit = 38;
        this.sensor = {
            read: function () {
                return Math.floor(Math.random() * 100);
            }
        };
    }
    check() {
        if (this.sensor.read() > this.upperLimit) {
            this.controlPanel.startAlarm('Overheating...');
        }
    }
}
class MasterControlPanel {
    constructor() {
        this.sensors = [];
        this.sensors.push(new HeatSensor(this));
    }
    start() {
        for (let sensor of this.sensors) {
            sensor.check();
        }
        setTimeout(() => this.start(), 1000);
    }
    startAlarm(message) {
        console.log('Alarm!  ' + message);
    }
}
const controlPanel = new MasterControlPanel();
controlPanel.start();
//# sourceMappingURL=Delegation.js.map