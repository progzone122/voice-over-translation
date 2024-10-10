export default {
  log: (...text: unknown[]) => {
    if (!DEBUG_MODE) {
      return;
    }
    return console.log(
      "%c[VOT DEBUG]",
      "background: #F2452D; color: #fff; padding: 5px;",
      ...text,
    );
  },
};
