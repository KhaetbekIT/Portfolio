import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
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
	disabled,
	...props
}: ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? (
				<span className="inline-block animate-spin" aria-hidden="true">
					<svg
						className="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</span>
			) : (
				children
			)}
		</Comp>
	);
}

export { Button, buttonVariants };
