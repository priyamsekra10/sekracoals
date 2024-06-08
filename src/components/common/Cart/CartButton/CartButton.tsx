import CartIcon from "@/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

type CartButtonProps = {
  handleCartButtonClick: () => void;
  className?: string;
};

export default function CartButton({
  handleCartButtonClick,
  className,
}: CartButtonProps) {
  return (
    <button className={className}>
      <span className="sr-only">Open navigation menu</span>
      <Button
        href="/products/headphones/xx99-mark-two-headphones"
        className=""
        intent="primary"
      >
        Contact Us
      </Button>
    </button>
  );
}
