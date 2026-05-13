-- page-band.lua
-- Quarto/Pandoc Lua filter.
-- Reads the page's own title, description, and categories from YAML metadata
-- and prepends a styled page-band section automatically.
-- No HTML partial file needed — works for any page that sets page-band: true.

function Meta(meta)
  -- Only run when the page opts in via  page-band: true  in YAML
  if not meta['page-band'] then return meta end

  local title = pandoc.utils.stringify(meta.title or '')
  local desc  = pandoc.utils.stringify(meta.description or '')
  local label = pandoc.utils.stringify(meta['page-label'] or 'Content')

  -- Build category badges from the categories list
  local badges = ''
  if meta.categories then
    for _, cat in ipairs(meta.categories) do
      local c = pandoc.utils.stringify(cat)
      badges = badges ..
        '<span class="badge">' .. c .. '</span>'
    end
  end
  if badges ~= '' then
    badges = '<div class="badge-row">' .. badges .. '</div>'
  end

  local html = string.format([[
<div id="progress-bar"></div>
<div class="page-band">
  <span class="section-label section-label-light">%s</span>
  <h1>%s</h1>
  <p>%s</p>
  %s
</div>
]], label, title, desc, badges)

  -- Prepend as a raw HTML block before the document body
  return meta, {pandoc.RawBlock('html', html)}
end

-- Return both Meta and a Pandoc filter table so the block is prepended
function Pandoc(doc)
  local meta = doc.meta
  if not meta['page-band'] then return doc end

  local title = pandoc.utils.stringify(meta.title or '')
  local desc  = pandoc.utils.stringify(meta.description or '')
  local label = pandoc.utils.stringify(meta['page-label'] or 'Content')

  local badges = ''
  if meta.categories then
    for _, cat in ipairs(meta.categories) do
      local c = pandoc.utils.stringify(cat)
      badges = badges ..
        '<span class="badge">' .. c .. '</span>'
    end
  end
  if badges ~= '' then
    badges = '<div class="badge-row">' .. badges .. '</div>'
  end

  local html = string.format([[
<div id="progress-bar"></div>
<div class="page-band">
  <span class="section-label section-label-light">%s</span>
  <h1>%s</h1>
  <p>%s</p>
  %s
</div>
]], label, title, desc, badges)

  local band = pandoc.RawBlock('html', html)
  -- Insert at the very beginning of the body
  table.insert(doc.blocks, 1, band)
  return doc
end
