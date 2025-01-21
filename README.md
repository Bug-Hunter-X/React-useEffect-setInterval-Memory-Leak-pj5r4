# React useEffect setInterval Memory Leak

This example demonstrates a common error when using `setInterval` within a React `useEffect` hook.  The problem lies in the way the closure is handled, leading to a memory leak and incorrect update behavior. The `setInterval` continues to run even after the component unmounts, and the closure references stale values, causing problems.

## How to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm start`

Observe that the counter continues to increment even after the component is unmounted or the page is refreshed. This indicates a memory leak.

## Solution

The solution involves ensuring the `setInterval` is properly cleared when the component unmounts.  A proper cleanup function and a correct usage of the dependency array are key to fixing the issue.