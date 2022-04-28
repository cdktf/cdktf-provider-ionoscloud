const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "ionos-cloud/ionoscloud@~> 6.2",
  cdktfVersion: '^0.10.3',
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
});

project.synth();
