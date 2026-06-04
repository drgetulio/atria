import meta from "../content/meta.json";

export function Disclaimer() {
  return (
    <p className="disclaimer" role="note">
      ⚠️ {meta.disclaimer}
    </p>
  );
}

export function ContentMeta() {
  return (
    <p className="muted">
      Fonte: {meta.source}
      <br />
      Conteúdo v{meta.contentVersion} · Última revisão: {meta.lastReviewed}
    </p>
  );
}
