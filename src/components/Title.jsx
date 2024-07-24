const Title = ({children, type}) => {
  if (type === 'large') {
    return (
      <h1 className='text-2xl font-bold leading-tight text-left'>
        {children}
      </h1>
    );
  }
  if (type === 'medium') {
    return (
      <h2 className='text-text font-bold text-[18px] '>
        {children}
      </h2>
    );
  }
  if (type === 'small') {
    return (
      <h3 className=''>
        {children}
      </h3>
    );
  }
  return (
    <p className=''>
      {children}
    </p>
  );
}

export default Title;
