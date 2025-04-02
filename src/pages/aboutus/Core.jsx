const Core = ({member,selectHandler}) => {
    
    return (
      <div className="bg-white shadow-md flex flex-col rounded-lg items-center
      transition-transform hover:scale-105 hover:shadow-lg p-4" onClick={()=>selectHandler(member.name)}>
        <img src={member.img} alt={member.name} className="w-32 h-32 rounded-lg object-cover" />
        <p className="font-bold mt-2">{member.name}</p>
        <p className="text-gray-500">{member.title}</p>
       
      </div>
    );
  };
  
  export default Core;
  