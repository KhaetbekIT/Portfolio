import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-(--radius-md) text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] aria-invalid:ring-[var(--destructive)/0.2] relative",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:opacity-90",

				destructive:
					"bg-destructive text-destructive-foreground hover:opacity-90",

				outline:
					"border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",

				secondary:
					"bg-secondary text-secondary-foreground hover:opacity-80",

				ghost: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",

				link: "text-primary underline-offset-4 hover:underline",
			},

			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-10 px-6",
				icon: "h-9 w-9",
				"icon-sm": "h-8 w-8",
				"icon-lg": "h-10 w-10",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	loading = false,
	children,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		>
			{loading ? (
				<span className="absolute inset-0 animate-spin" />
			) : (
				children
			)}
		</Comp>
	);
}

export { Button, buttonVariants };
