export default {
  history: [],
  getHistory () { return this.history },
  setHistory (trace) { this.history.push(trace) }
}
