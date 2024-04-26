  (() => {
      function getCurrentDateAndTime() {
          const dateTime = new Date(); 
          return dateTime.toLocaleString();
      }
      const dateDisplay = document.getElementById("date-time");
      dateDisplay.innerHTML = getCurrentDateAndTime();

      function updateDateTime() {
          const dateDisplay = document.getElementById("date-time");
          dateDisplay.innerHTML = getCurrentDateAndTime();
       }
       setInterval(updateDateTime, 1000); //update every 1 second

  })();
