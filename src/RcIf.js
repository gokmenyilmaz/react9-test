export default function If({boolean, ...props}) {
    const { children } = props;
    if (boolean)
        return (
                {...children}
        );
    return null;
}

export const Ifc = ({ condition, children }) => {
    if (condition) {
      return children;
    }
  };