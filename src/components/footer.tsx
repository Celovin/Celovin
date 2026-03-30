export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-fg text-sm font-medium mb-1">Celovin · 셀로빈</p>
          <p className="text-fg-dim text-xs leading-relaxed">
            사업자등록번호 871-12-02965
            <br />
            대표 최승원 · 경기도 수원시
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 md:items-end">
          <a
            href="mailto:hello@celovin.com"
            className="text-fg-muted text-xs transition-colors hover:text-fg"
          >
            hello@celovin.com
          </a>
          <p className="text-fg-dim text-xs">
            &copy; {year} Celovin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
