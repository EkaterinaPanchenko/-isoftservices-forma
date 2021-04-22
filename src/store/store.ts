export type TStore = ReturnType<typeof createStore>;

export const createStore = () => ({
  fullname: "",
  setFullname(fullname: string) {
    this.fullname = fullname;
  },
  clearFullname() {
    this.fullname = "";
  },
});
