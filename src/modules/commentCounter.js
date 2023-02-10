export const commentCounter = () => {
  const updatedCounter = document.querySelector('.comment_list').getElementsByTagName('li').length;
  return updatedCounter;
};

export default commentCounter;