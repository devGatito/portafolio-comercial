import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "~/utils/cn";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const variants = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-950",
  secondary:
    "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50 focus-visible:outline-zinc-950",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-zinc-950",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
  } = props;

  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (props.href !== undefined) {
    const {
      children: _children,
      variant: _variant,
      className: _className,
      ...anchorProps
    } = props;

    return (
      <a className={styles} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    variant: _variant,
    className: _className,
    href: _href,
    ...buttonProps
  } = props;

  return (
    <button className={styles} type="button" {...buttonProps}>
      {children}
    </button>
  );
}