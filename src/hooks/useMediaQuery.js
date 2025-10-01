import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  // Local state that stores whether the media query matches (true) or not (false)
    
  const [value, setValue] =  useState(false);

  useEffect(() => {
   // Function called each time the media query status changes
    function onChange(e) {
       // Updates the state with the new match result
      setValue(e.matches);
    }

     // Creates a MediaQueryList object to watch the media query
    const result = matchMedia(query);
    
    // Adds an event listener to detect changes
    // For example, when the user resizes the window
    result.addEventListener("change", onChange);
    
     // Sets the initial value
    setValue(result.matches);

    // Cleanup function called when the component is unmounted
    // or when the query changes
    return () => result.removeEventListener("change", onChange);
  }, [query]); // Relance l'effet si la query change

  // Returns true if the media query matches, false otherwise
  return value;
}