import React, {useEffect, useState} from 'react'

const Greetings = ({name}) => {
    const myDate = new Date();
  const hrs = myDate.getHours();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (hrs < 12) {
      setGreeting("Good morning");
    } else if (hrs >= 12 && hrs < 17) {
      setGreeting("Good afternoon");
    } else if (hrs >= 17 && hrs <= 24) {
      setGreeting("Good evening");
    }
  }, [hrs]);
  return (
    <div>
        <h3>{greeting}{name && `, ${name} 👋`}</h3>
    </div>
  )
}

export default Greetings