import { BsTrashFill, BsCardChecklist } from 'react-icons/bs';

function ListItem({ todo, deleteTodo, updateTodo }) {
   return (
      <div className="list-wrapper">
         <div>
            {todo.isDone ? (
               <h1 className="done-true">{todo.listTodo}</h1>
            ) : (
               <h1>{todo.listTodo}</h1>
            )}
         </div>
         <div className="icon-wrapper">
            <div className="clicked" onClick={() => deleteTodo(todo.id)}>
               <BsTrashFill
                  style={{
                     color: 'red',
                     width: '4rem',
                     height: '4rem',
                  }}
               />
            </div>
            <div
               className="clicked"
               onClick={() => updateTodo(todo.id, todo.isDone)}
            >
               <BsCardChecklist
                  style={{
                     color: 'red',
                     width: '4rem',
                     height: '4rem',
                  }}
               />
            </div>
         </div>
      </div>
   );
}

export default ListItem;
