interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert">
        <strong>{children}</strong> You should check in on some of those fields
        below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClick}></button>
      </div>
    </>
  );
};

export default Alert;
