function TodoItem2() {
  let TodoName = "Go to College";
  let TodoDate = "4/10/2023";
  return (
    <div class="row">
      <div class="col-6">{TodoName}</div>
      <div class="col-4">{TodoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger btn-new">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem2;
