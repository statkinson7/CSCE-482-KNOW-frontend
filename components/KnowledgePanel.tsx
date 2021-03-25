import * as React from 'react';
import { KnowledgePanelData } from './types';
import Body from './Body/Body';
import Header from './Header/Header';

interface KnowledgePanelProps {
  data: KnowledgePanelData;
}

const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ data }) => {
  const {
    title, subtitle, description, entries,
  } = data;

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      Separation here
      <Body description={description} entries={entries} />
    </div>
  );
};

export default KnowledgePanel;