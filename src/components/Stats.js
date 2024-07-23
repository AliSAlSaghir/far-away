export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const nbItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((packedItems / nbItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You got everything! Ready to go ✈️"
      ) : (
        <em>
          You have {nbItems} items on your list, and you have packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
