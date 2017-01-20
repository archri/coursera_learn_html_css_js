var a = {
  prop: "inside",
  logThis: function() {
    console.log(this);
    function logThisNested() {
      console.log(this);
    }
    logThisNested();
  }
};
a.logThis();
