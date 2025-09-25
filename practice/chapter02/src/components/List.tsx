//구조분해 오류...
// const List = ({ tech }) => {
//     return (
//       <li style={{ listStyle: 'none' }}>
//         {tech}
//       </li>
//     )
//   }
  
//   export default List

//해결책
type ListProps = {
    tech: string; // tech는 문자열
  };
  
  const List = ({ tech }: ListProps) => {
    return (
      <li style={{ listStyle: 'none' }}>
        {tech}
      </li>
    );
  };
  
  export default List;
  