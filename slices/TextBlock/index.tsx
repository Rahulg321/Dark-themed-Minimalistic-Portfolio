import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-base md:prose-lg prose-code:text-yellow-200 dark:prose-invert max-w-none w-full">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default TextBlock;
