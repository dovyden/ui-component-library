import path from 'node:path';
import { customAcvTitleCase } from '@acronis-platform/utils';

export default (
  renderedUsage,
  doc,
  config,
  fileName,
  requiresMd,
  { isSubComponent }
) => {
  const { name, displayName, description, docsBlocks, tags, functional } = doc;
  const outputName = customAcvTitleCase(name || displayName);
  const { deprecated, author, since, version, see, link } = tags || {};

  return `
  ${isSubComponent ? '##' : '#'} ${deprecated ? `~~${outputName}~~` : outputName}

  ${deprecated ? `> **Deprecated** ${(deprecated[0]).description}\n` : ''}
  ${description ? `> ${description}` : ''}

  ${functional ? renderedUsage.functionalTag : ''}
  ${author ? author.map(a => `Author: ${(a).description}\n`) : ''}
  ${since ? `Since: ${(since[0]).description}\n` : ''}
  ${version ? `Version: ${(version[0]).description}\n` : ''}
  ${see ? see.map(s => `[See](${(s).description})\n`) : ''}
  ${link ? link.map(l => `[See](${(l).description})\n`) : ''}

  ${docsBlocks ? `\n${docsBlocks.join('\n---\n')}` : ''}
  
<!--@include: ./${path.basename(fileName).replace(/\.vue$/, '.doc.md')}-->

  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}
  ${renderedUsage.expose}

  ${
  requiresMd.length
    ? `---\n${requiresMd.map(component => component.content).join('\n---\n')}`
    : ''
}
  `;
};
