export default {
  history: [],
  getHistory () { return this.history },
  setHistory (trace) { this.history.push({ text: trace, date: new Date().toDateString() }) }
}
