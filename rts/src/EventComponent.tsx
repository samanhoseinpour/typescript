const EventComponent = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.target);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <div draggable onDrag={handleDrag}>
        Draggable
      </div>
    </div>
  );
};

export default EventComponent;
