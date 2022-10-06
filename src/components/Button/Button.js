import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  height: 48px;
  background: #605dec;
  border: 1px solid #605dec;
  border-radius: 4px;
  align-items: center;
  padding: 12px 20px;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #232538;
    border: 1px solid #232538;
  }

  ${(props) => {
    switch (props.size) {
      case "large":
        return `
                    width: 120px;
                `;
      case "medium":
        return `
                    width: 98px;
                `;
      case "small":
        return `
                    width: 90px;
                    height: 40px;
                    padding: 8px 16px;
                `;
    }
  }};

  ${(props) => {
    switch (props.color) {
      case "secondary":
        return `
                    border: 1px solid #605DEC;
                    background: #fff;
                    color: #605DEC;
                
                    :hover {
                        background: #E9E8FC;
                    }
                
                    :disabled {
                        background: #fff;
                        border: 1px solid #7C8DB0;
                        color:#7C8DB0;
                    }
                `;
      case "primary":
        return `
                    border: 1px solid #2b2d42;
                    background: #2b2d42;
                    color: #fff;
                    
                
                    :hover {
                        background: #232538;
                        border: 1px solid #232538;
                    }
                
                    :disabled {
                        background: rgba(203, 212, 230, 0.3);
                        border: 1px solid #7C8DB0;
                        color:#7C8DB0;
                    }
                `;
    }
  }};
`;

const Button = ({ children, color, size, disabled, onClick }) => {
  return (
    <StyledButton
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
