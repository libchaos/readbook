interface ControlPanel {
  startAlarm(message: string): any
}

interface Sensor {
  check(): any
}

class HeatSensor {
  private upperLimit = 38
  private sensor = {
    read: function() {
      return Math.floor(Math.random() * 100)
    }
  }
  constructor(private controlPanel: ControlPanel) {

  }
  check() {
    if (this.sensor.read() > this.upperLimit) {
      this.controlPanel.startAlarm('Overheating...')
    }
  }
}


class MasterControlPanel {
  private sensors: Sensor[] = []
  constructor() {
    this.sensors.push(new HeatSensor(this))
  }
  start() {
    for(let sensor of this.sensors) {
      sensor.check()
    }
    setTimeout(() => this.start(), 1000)
  }
  startAlarm(message: string) {
    console.log('Alarm!  ' + message);
  }
}

const controlPanel = new MasterControlPanel()
controlPanel.start()