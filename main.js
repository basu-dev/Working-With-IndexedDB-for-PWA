(async function () {
  const DBNAME = "my-db";
  const studentsstore = "Students";
  let dbstate = window.indexedDB.open(DBNAME, 1.3);
    
  let db, store, tx, index;
  dbstate.onupgradeneeded = function (e) {
    console.log("upgree needed");
    db = dbstate.result;
    store=db.createObjectStore(studentsstore, {
      autoIncrement: true,
      keyPath: "id",
    });
  };
  dbstate.onerror = (e) => console.log("Error", e);
  dbstate.onsuccess = async (e) => {
    db = dbstate.result;
    tx = db.transaction(studentsstore, "readwrite");
    db.onerror = (e) => console.log("Error", e);
    store = tx.objectStore(studentsstore);
   let result= store.put({  name: "basu", class: "bce" });
   result.onsuccess=(e)=>console.log("success",e)
   result.onerror=(e)=>console.log("error",e)
    store.put({  name: "dev", class: "devux" });
    // let result=await store.get(4);
    // result.onsuccess=()=>{
    //     console.log(result.result)
    // }
  };
})();
