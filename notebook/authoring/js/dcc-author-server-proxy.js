/**
 * 
 */
//class DCCAuthorServer {
   const casesList = async (selector) => {
      const response = await fetch("http://127.0.0.1:8888/cases-list", {
         method: "POST",
         headers:{
           "Content-Type": "application/json"
         }
      });
      const casesReturn = await response.json();
      const cases = casesReturn.casesList;
      console.log(cases);
      let finalCasesList = {};
      for (var c in cases)
         finalCasesList[cases[c]] = "images/mono-slide.svg";
      selector.addSelectList(finalCasesList);
      return cases;
   }
   
   const loadCase = async (caseName, author) => {
      console.log(caseName);
      
      const response = await fetch("http://127.0.0.1:8888/load-case", {
         method: "POST",
         body: JSON.stringify({"caseName": caseName}),
         headers:{
           "Content-Type": "application/json"
         }
      });
      const caseText = await response.json();
      const caseMd = caseText.caseMd;

      author._caseLoaded(caseMd);
      return caseMd;
   }

//}

