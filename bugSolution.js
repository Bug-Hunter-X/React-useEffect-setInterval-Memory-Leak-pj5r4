```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correctly using the intervalId variable
    const startInterval = () => {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    startInterval();
    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```