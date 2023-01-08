const Avatar = ({ name }) => {
  const style = {
    container: {
      width: "40px",
      height: "40px",
      backgroundColor: "#" + Math.floor(Math.random() * 0x1000000).toString(16),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      borderRadius: "50%",
      fontWeight: 700
    }
  };


  return (
    <div style={style.container}>
      {name ? name.charAt(0).toUpperCase() : 'A'}
    </div>
  );
};

export default Avatar;