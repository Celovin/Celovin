export function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="border-t border-border pt-16">
          <p className="text-xs tracking-widest uppercase text-fg-dim mb-4">Contact</p>
          <h2 className="text-fg mb-8">함께 이야기하기</h2>
          <p className="text-fg-muted text-sm leading-relaxed max-w-[48ch] mb-12">
            사업 제안, 협업 문의, 또는 제품에 대한 의견이 있으시다면 언제든 연락해 주세요.
          </p>

          <a
            href="mailto:hello@celovin.com"
            className="group inline-flex items-center gap-3 text-accent text-lg font-medium transition-colors hover:text-fg"
          >
            hello@celovin.com
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 10h13M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
