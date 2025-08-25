export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
    >
      {children}
    </select>
  );
}
