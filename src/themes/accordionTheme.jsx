export const accordionTheme = {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-4",
              borderWidth: "border-b border-b-blue-gray-100",
              color: "text-white",
              fontSmoothing: "antialiased",
              fontFamily:  "Lato",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "hover:text-customYellow",
              transition: "transition-colors",
            },
            active: { color: "!text-customYellow" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-4",
            color: "text-gray-700",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
            active: { color: "!text-customYellow" },
            hover: "hover:text-customYellow",
          },
          disabled: {
            pointerEvents: "pointer-events-none",
            opacity: "opacity-50",
          },
        },
      },
    },
  };