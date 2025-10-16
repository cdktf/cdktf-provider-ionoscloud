# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-ionoscloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-ionoscloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server ionoscloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.Server.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.Server(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datacenter_id: str,
  name: str,
  allow_replace: bool | IResolvable = None,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  cores: typing.Union[int, float] = None,
  cpu_family: str = None,
  firewallrule_ids: typing.List[str] = None,
  hostname: str = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  label: IResolvable | typing.List[ServerLabel] = None,
  nic: ServerNic = None,
  ram: typing.Union[int, float] = None,
  security_groups_ids: typing.List[str] = None,
  ssh_key_path: typing.List[str] = None,
  ssh_keys: typing.List[str] = None,
  template_uuid: str = None,
  timeouts: ServerTimeouts = None,
  type: str = None,
  vm_state: str = None,
  volume: ServerVolume = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#datacenter_id Server#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, allows the update of immutable fields by destroying and re-creating the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootCdrom">boot_cdrom</a></code> | <code>str</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_image Server#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cores Server#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cpuFamily">cpu_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cpu_family Server#cpu_family}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewallrule_ids Server#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The hostname of the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_name Server#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.label">label</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ram Server#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | The list of Security Group IDs for the server. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.templateUuid">template_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#template_uuid Server#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.type">type</a></code> | <code>str</code> | server usages: ENTERPRISE or CUBE. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.vmState">vm_state</a></code> | <code>str</code> | Sets the power state of the server. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | volume block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#datacenter_id Server#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.allowReplace"></a>

- *Type:* bool | cdktf.IResolvable

When set to true, allows the update of immutable fields by destroying and re-creating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#allow_replace Server#allow_replace}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootCdrom"></a>

- *Type:* str

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that you can retrieve using the image data source

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_cdrom Server#boot_cdrom}

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_image Server#boot_image}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cores Server#cores}.

---

##### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cpuFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cpu_family Server#cpu_family}.

---

##### `firewallrule_ids`<sup>Optional</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.firewallruleIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewallrule_ids Server#firewallrule_ids}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.hostname"></a>

- *Type:* str

The hostname of the resource.

Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#hostname Server#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_name Server#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imagePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.label"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#label Server#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.nic"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#nic Server#nic}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ram Server#ram}.

---

##### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.securityGroupsIds"></a>

- *Type:* typing.List[str]

The list of Security Group IDs for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#security_groups_ids Server#security_groups_ids}

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeyPath"></a>

- *Type:* typing.List[str]

Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images.

Does not support `~` expansion to homedir in the given path. Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. This property is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `template_uuid`<sup>Optional</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.templateUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#template_uuid Server#template_uuid}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#timeouts Server#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.type"></a>

- *Type:* str

server usages: ENTERPRISE or CUBE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#type Server#type}

---

##### `vm_state`<sup>Optional</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.vmState"></a>

- *Type:* str

Sets the power state of the server.

Possible values: `RUNNING`, `SHUTOFF` or `SUSPENDED`. SUSPENDED state is only valid for cube. SHUTOFF state is only valid for enterprise

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#vm_state Server#vm_state}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#volume Server#volume}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putLabel">put_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putNic">put_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetAllowReplace">reset_allow_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootCdrom">reset_boot_cdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootImage">reset_boot_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCores">reset_cores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCpuFamily">reset_cpu_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds">reset_firewallrule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetNic">reset_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetRam">reset_ram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSecurityGroupsIds">reset_security_groups_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath">reset_ssh_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid">reset_template_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetVmState">reset_vm_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.Server.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.server.Server.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.server.Server.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.server.Server.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.server.Server.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.server.Server.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.server.Server.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.server.Server.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.server.Server.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.server.Server.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.Server.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.server.Server.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_label` <a name="put_label" id="@cdktf/provider-ionoscloud.server.Server.putLabel"></a>

```python
def put_label(
  value: IResolvable | typing.List[ServerLabel]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putLabel.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]

---

##### `put_nic` <a name="put_nic" id="@cdktf/provider-ionoscloud.server.Server.putNic"></a>

```python
def put_nic(
  lan: typing.Union[int, float],
  dhcp: bool | IResolvable = None,
  dhcpv6: bool | IResolvable = None,
  firewall: IResolvable | typing.List[ServerNicFirewall] = None,
  firewall_active: bool | IResolvable = None,
  firewall_type: str = None,
  ips: typing.List[str] = None,
  ipv6_cidr_block: str = None,
  ipv6_ips: typing.List[str] = None,
  mac: str = None,
  name: str = None,
  security_groups_ids: typing.List[str] = None
) -> None
```

###### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.lan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#lan Server#lan}.

---

###### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.dhcp"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#dhcp Server#dhcp}.

---

###### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.dhcpv6"></a>

- *Type:* bool | cdktf.IResolvable

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#dhcpv6 Server#dhcpv6}

---

###### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.firewall"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall Server#firewall}

---

###### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.firewallActive"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_active Server#firewall_active}.

---

###### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.firewallType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_type Server#firewall_type}.

---

###### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.ips"></a>

- *Type:* typing.List[str]

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ips Server#ips}

---

###### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.ipv6CidrBlock"></a>

- *Type:* str

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ipv6_cidr_block Server#ipv6_cidr_block}

---

###### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.ipv6Ips"></a>

- *Type:* typing.List[str]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ipv6_ips Server#ipv6_ips}

---

###### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.mac"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#mac Server#mac}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

###### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.securityGroupsIds"></a>

- *Type:* typing.List[str]

The list of Security Group IDs for the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#security_groups_ids Server#security_groups_ids}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#create Server#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#default Server#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#delete Server#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#update Server#update}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-ionoscloud.server.Server.putVolume"></a>

```python
def put_volume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  expose_serial: bool | IResolvable = None,
  image_password: str = None,
  licence_type: str = None,
  name: str = None,
  size: typing.Union[int, float] = None,
  ssh_key_path: typing.List[str] = None,
  ssh_keys: typing.List[str] = None,
  user_data: str = None
) -> None
```

###### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.diskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#disk_type Server#disk_type}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}.

---

###### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.backupUnitId"></a>

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#backup_unit_id Server#backup_unit_id}

---

###### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.bus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#bus Server#bus}.

---

###### `expose_serial`<sup>Optional</sup> <a name="expose_serial" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.exposeSerial"></a>

- *Type:* bool | cdktf.IResolvable

If set to `true` will expose the serial id of the disk attached to the server.

If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial can influence licensed software (e.g. Windows) behavior

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#expose_serial Server#expose_serial}

---

###### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.imagePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}.

---

###### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.licenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#licence_type Server#licence_type}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#size Server#size}

---

###### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.sshKeyPath"></a>

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_keys Server#ssh_keys}

---

###### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.userData"></a>

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#user_data Server#user_data}

---

##### `reset_allow_replace` <a name="reset_allow_replace" id="@cdktf/provider-ionoscloud.server.Server.resetAllowReplace"></a>

```python
def reset_allow_replace() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_boot_cdrom` <a name="reset_boot_cdrom" id="@cdktf/provider-ionoscloud.server.Server.resetBootCdrom"></a>

```python
def reset_boot_cdrom() -> None
```

##### `reset_boot_image` <a name="reset_boot_image" id="@cdktf/provider-ionoscloud.server.Server.resetBootImage"></a>

```python
def reset_boot_image() -> None
```

##### `reset_cores` <a name="reset_cores" id="@cdktf/provider-ionoscloud.server.Server.resetCores"></a>

```python
def reset_cores() -> None
```

##### `reset_cpu_family` <a name="reset_cpu_family" id="@cdktf/provider-ionoscloud.server.Server.resetCpuFamily"></a>

```python
def reset_cpu_family() -> None
```

##### `reset_firewallrule_ids` <a name="reset_firewallrule_ids" id="@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds"></a>

```python
def reset_firewallrule_ids() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-ionoscloud.server.Server.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.server.Server.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-ionoscloud.server.Server.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.server.Server.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-ionoscloud.server.Server.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_nic` <a name="reset_nic" id="@cdktf/provider-ionoscloud.server.Server.resetNic"></a>

```python
def reset_nic() -> None
```

##### `reset_ram` <a name="reset_ram" id="@cdktf/provider-ionoscloud.server.Server.resetRam"></a>

```python
def reset_ram() -> None
```

##### `reset_security_groups_ids` <a name="reset_security_groups_ids" id="@cdktf/provider-ionoscloud.server.Server.resetSecurityGroupsIds"></a>

```python
def reset_security_groups_ids() -> None
```

##### `reset_ssh_key_path` <a name="reset_ssh_key_path" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath"></a>

```python
def reset_ssh_key_path() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_template_uuid` <a name="reset_template_uuid" id="@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid"></a>

```python
def reset_template_uuid() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.server.Server.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.server.Server.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vm_state` <a name="reset_vm_state" id="@cdktf/provider-ionoscloud.server.Server.resetVmState"></a>

```python
def reset_vm_state() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-ionoscloud.server.Server.resetVolume"></a>

```python
def reset_volume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.server.Server.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.Server.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.Server.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.Server.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.Server.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Server to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootVolume">boot_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleId">firewallrule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds">inline_volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.label">label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryNic">primary_nic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.allowReplaceInput">allow_replace_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput">boot_cdrom_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImageInput">boot_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput">cpu_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput">firewallrule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.labelInput">label_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nicInput">nic_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.securityGroupsIdsInput">security_groups_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput">ssh_key_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput">template_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.vmStateInput">vm_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volumeInput">volume_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImage">boot_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuid">template_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.vmState">vm_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.server.Server.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.server.Server.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.Server.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.Server.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.Server.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.server.Server.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.server.Server.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.Server.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.Server.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `boot_volume`<sup>Required</sup> <a name="boot_volume" id="@cdktf/provider-ionoscloud.server.Server.property.bootVolume"></a>

```python
boot_volume: str
```

- *Type:* str

---

##### `firewallrule_id`<sup>Required</sup> <a name="firewallrule_id" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleId"></a>

```python
firewallrule_id: str
```

- *Type:* str

---

##### `inline_volume_ids`<sup>Required</sup> <a name="inline_volume_ids" id="@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds"></a>

```python
inline_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.Server.property.label"></a>

```python
label: ServerLabelList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a>

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.Server.property.nic"></a>

```python
nic: ServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a>

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="@cdktf/provider-ionoscloud.server.Server.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `primary_nic`<sup>Required</sup> <a name="primary_nic" id="@cdktf/provider-ionoscloud.server.Server.property.primaryNic"></a>

```python
primary_nic: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.Server.property.timeouts"></a>

```python
timeouts: ServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.Server.property.volume"></a>

```python
volume: ServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a>

---

##### `allow_replace_input`<sup>Optional</sup> <a name="allow_replace_input" id="@cdktf/provider-ionoscloud.server.Server.property.allowReplaceInput"></a>

```python
allow_replace_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `boot_cdrom_input`<sup>Optional</sup> <a name="boot_cdrom_input" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput"></a>

```python
boot_cdrom_input: str
```

- *Type:* str

---

##### `boot_image_input`<sup>Optional</sup> <a name="boot_image_input" id="@cdktf/provider-ionoscloud.server.Server.property.bootImageInput"></a>

```python
boot_image_input: str
```

- *Type:* str

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-ionoscloud.server.Server.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family_input`<sup>Optional</sup> <a name="cpu_family_input" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput"></a>

```python
cpu_family_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `firewallrule_ids_input`<sup>Optional</sup> <a name="firewallrule_ids_input" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput"></a>

```python
firewallrule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-ionoscloud.server.Server.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.server.Server.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-ionoscloud.server.Server.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-ionoscloud.server.Server.property.labelInput"></a>

```python
label_input: IResolvable | typing.List[ServerLabel]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.server.Server.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nic_input`<sup>Optional</sup> <a name="nic_input" id="@cdktf/provider-ionoscloud.server.Server.property.nicInput"></a>

```python
nic_input: ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-ionoscloud.server.Server.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups_ids_input`<sup>Optional</sup> <a name="security_groups_ids_input" id="@cdktf/provider-ionoscloud.server.Server.property.securityGroupsIdsInput"></a>

```python
security_groups_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_key_path_input`<sup>Optional</sup> <a name="ssh_key_path_input" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput"></a>

```python
ssh_key_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_uuid_input`<sup>Optional</sup> <a name="template_uuid_input" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput"></a>

```python
template_uuid_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ServerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.server.Server.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vm_state_input`<sup>Optional</sup> <a name="vm_state_input" id="@cdktf/provider-ionoscloud.server.Server.property.vmStateInput"></a>

```python
vm_state_input: str
```

- *Type:* str

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-ionoscloud.server.Server.property.volumeInput"></a>

```python
volume_input: ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---

##### `allow_replace`<sup>Required</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.server.Server.property.allowReplace"></a>

```python
allow_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `boot_cdrom`<sup>Required</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

---

##### `boot_image`<sup>Required</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.server.Server.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.Server.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `firewallrule_ids`<sup>Required</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds"></a>

```python
firewallrule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.server.Server.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.server.Server.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.Server.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.Server.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups_ids`<sup>Required</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.Server.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_key_path`<sup>Required</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.Server.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vm_state`<sup>Required</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.server.Server.property.vmState"></a>

```python
vm_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.server.Server.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-ionoscloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datacenter_id: str,
  name: str,
  allow_replace: bool | IResolvable = None,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  cores: typing.Union[int, float] = None,
  cpu_family: str = None,
  firewallrule_ids: typing.List[str] = None,
  hostname: str = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  label: IResolvable | typing.List[ServerLabel] = None,
  nic: ServerNic = None,
  ram: typing.Union[int, float] = None,
  security_groups_ids: typing.List[str] = None,
  ssh_key_path: typing.List[str] = None,
  ssh_keys: typing.List[str] = None,
  template_uuid: str = None,
  timeouts: ServerTimeouts = None,
  type: str = None,
  vm_state: str = None,
  volume: ServerVolume = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#datacenter_id Server#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, allows the update of immutable fields by destroying and re-creating the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_image Server#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cores Server#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily">cpu_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cpu_family Server#cpu_family}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewallrule_ids Server#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.hostname">hostname</a></code> | <code>str</code> | The hostname of the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_name Server#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.label">label</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ram Server#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | The list of Security Group IDs for the server. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid">template_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#template_uuid Server#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.type">type</a></code> | <code>str</code> | server usages: ENTERPRISE or CUBE. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.vmState">vm_state</a></code> | <code>str</code> | Sets the power state of the server. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#datacenter_id Server#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.allowReplace"></a>

```python
allow_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When set to true, allows the update of immutable fields by destroying and re-creating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#allow_replace Server#allow_replace}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that you can retrieve using the image data source

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_cdrom Server#boot_cdrom}

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#boot_image Server#boot_image}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cores Server#cores}.

---

##### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#cpu_family Server#cpu_family}.

---

##### `firewallrule_ids`<sup>Optional</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds"></a>

```python
firewallrule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewallrule_ids Server#firewallrule_ids}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The hostname of the resource.

Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#hostname Server#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_name Server#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.label"></a>

```python
label: IResolvable | typing.List[ServerLabel]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#label Server#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.nic"></a>

```python
nic: ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#nic Server#nic}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ram Server#ram}.

---

##### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Security Group IDs for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#security_groups_ids Server#security_groups_ids}

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images.

Does not support `~` expansion to homedir in the given path. Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. This property is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `template_uuid`<sup>Optional</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#template_uuid Server#template_uuid}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts"></a>

```python
timeouts: ServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#timeouts Server#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

server usages: ENTERPRISE or CUBE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#type Server#type}

---

##### `vm_state`<sup>Optional</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.vmState"></a>

```python
vm_state: str
```

- *Type:* str

Sets the power state of the server.

Possible values: `RUNNING`, `SHUTOFF` or `SUSPENDED`. SUSPENDED state is only valid for cube. SHUTOFF state is only valid for enterprise

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#vm_state Server#vm_state}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.volume"></a>

```python
volume: ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#volume Server#volume}

---

### ServerLabel <a name="ServerLabel" id="@cdktf/provider-ionoscloud.server.ServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerLabel(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#key Server#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#value Server#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#key Server#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#value Server#value}.

---

### ServerNic <a name="ServerNic" id="@cdktf/provider-ionoscloud.server.ServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerNic(
  lan: typing.Union[int, float],
  dhcp: bool | IResolvable = None,
  dhcpv6: bool | IResolvable = None,
  firewall: IResolvable | typing.List[ServerNicFirewall] = None,
  firewall_active: bool | IResolvable = None,
  firewall_type: str = None,
  ips: typing.List[str] = None,
  ipv6_cidr_block: str = None,
  ipv6_ips: typing.List[str] = None,
  mac: str = None,
  name: str = None,
  security_groups_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#lan Server#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp">dhcp</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#dhcp Server#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6">dhcpv6</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewall">firewall</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]</code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive">firewall_active</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_active Server#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType">firewall_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_type Server#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ips">ips</a></code> | <code>typing.List[str]</code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.mac">mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#mac Server#mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | The list of Security Group IDs for the NIC. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.server.ServerNic.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#lan Server#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp"></a>

```python
dhcp: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#dhcp Server#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6"></a>

```python
dhcpv6: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#dhcpv6 Server#dhcpv6}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewall"></a>

```python
firewall: IResolvable | typing.List[ServerNicFirewall]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall Server#firewall}

---

##### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive"></a>

```python
firewall_active: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_active Server#firewall_active}.

---

##### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#firewall_type Server#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ips Server#ips}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ipv6_cidr_block Server#ipv6_cidr_block}

---

##### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ipv6_ips Server#ipv6_ips}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-ionoscloud.server.ServerNic.property.mac"></a>

```python
mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#mac Server#mac}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNic.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

##### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.ServerNic.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Security Group IDs for the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#security_groups_ids Server#security_groups_ids}

---

### ServerNicFirewall <a name="ServerNicFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerNicFirewall(
  protocol: str,
  icmp_code: str = None,
  icmp_type: str = None,
  name: str = None,
  port_range_end: typing.Union[int, float] = None,
  port_range_start: typing.Union[int, float] = None,
  source_ip: str = None,
  source_mac: str = None,
  target_ip: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#protocol Server#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#icmp_code Server#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#icmp_type Server#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#port_range_end Server#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#port_range_start Server#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#source_ip Server#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#source_mac Server#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#target_ip Server#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#type Server#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#protocol Server#protocol}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#icmp_code Server#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#icmp_type Server#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#port_range_end Server#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#port_range_start Server#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#source_ip Server#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#source_mac Server#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#target_ip Server#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#type Server#type}.

---

### ServerTimeouts <a name="ServerTimeouts" id="@cdktf/provider-ionoscloud.server.ServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#create Server#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#default Server#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#delete Server#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#update Server#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#create Server#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#default Server#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#delete Server#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#update Server#update}.

---

### ServerVolume <a name="ServerVolume" id="@cdktf/provider-ionoscloud.server.ServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerVolume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  expose_serial: bool | IResolvable = None,
  image_password: str = None,
  licence_type: str = None,
  name: str = None,
  size: typing.Union[int, float] = None,
  ssh_key_path: typing.List[str] = None,
  ssh_keys: typing.List[str] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType">disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#disk_type Server#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.bus">bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#bus Server#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.exposeSerial">expose_serial</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to `true` will expose the serial id of the disk attached to the server. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType">licence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#licence_type Server#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.userData">user_data</a></code> | <code>str</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#disk_type Server#disk_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#backup_unit_id Server#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.bus"></a>

```python
bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#bus Server#bus}.

---

##### `expose_serial`<sup>Optional</sup> <a name="expose_serial" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.exposeSerial"></a>

```python
expose_serial: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to `true` will expose the serial id of the disk attached to the server.

If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial can influence licensed software (e.g. Windows) behavior

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#expose_serial Server#expose_serial}

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#image_password Server#image_password}.

---

##### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#licence_type Server#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#name Server#name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#size Server#size}

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.userData"></a>

```python
user_data: str
```

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/server#user_data Server#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLabelList <a name="ServerLabelList" id="@cdktf/provider-ionoscloud.server.ServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServerLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServerLabel]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>]

---


### ServerLabelOutputReference <a name="ServerLabelOutputReference" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServerLabel
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>

---


### ServerNicFirewallList <a name="ServerNicFirewallList" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerNicFirewallList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServerNicFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServerNicFirewall]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]

---


### ServerNicFirewallOutputReference <a name="ServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerNicFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd">reset_port_range_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart">reset_port_range_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac">reset_source_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_range_end` <a name="reset_port_range_end" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```python
def reset_port_range_end() -> None
```

##### `reset_port_range_start` <a name="reset_port_range_start" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart"></a>

```python
def reset_port_range_start() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_source_mac` <a name="reset_source_mac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac"></a>

```python
def reset_source_mac() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput">port_range_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput">port_range_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput">source_mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput">target_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode">icmp_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac">source_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp">target_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_range_end_input`<sup>Optional</sup> <a name="port_range_end_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```python
port_range_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start_input`<sup>Optional</sup> <a name="port_range_start_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```python
port_range_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `source_mac_input`<sup>Optional</sup> <a name="source_mac_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput"></a>

```python
source_mac_input: str
```

- *Type:* str

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput"></a>

```python
target_ip_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_range_end`<sup>Required</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start`<sup>Required</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `source_mac`<sup>Required</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServerNicFirewall
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>

---


### ServerNicOutputReference <a name="ServerNicOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerNicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall">put_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6">reset_dhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall">reset_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive">reset_firewall_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType">reset_firewall_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps">reset_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips">reset_ipv6_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetMac">reset_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetSecurityGroupsIds">reset_security_groups_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall` <a name="put_firewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall"></a>

```python
def put_firewall(
  value: IResolvable | typing.List[ServerNicFirewall]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]

---

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_dhcpv6` <a name="reset_dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6"></a>

```python
def reset_dhcpv6() -> None
```

##### `reset_firewall` <a name="reset_firewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall"></a>

```python
def reset_firewall() -> None
```

##### `reset_firewall_active` <a name="reset_firewall_active" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive"></a>

```python
def reset_firewall_active() -> None
```

##### `reset_firewall_type` <a name="reset_firewall_type" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType"></a>

```python
def reset_firewall_type() -> None
```

##### `reset_ips` <a name="reset_ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps"></a>

```python
def reset_ips() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_ips` <a name="reset_ipv6_ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips"></a>

```python
def reset_ipv6_ips() -> None
```

##### `reset_mac` <a name="reset_mac" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetMac"></a>

```python
def reset_mac() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_security_groups_ids` <a name="reset_security_groups_ids" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetSecurityGroupsIds"></a>

```python
def reset_security_groups_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput">dhcp_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input">dhcpv6_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput">firewall_active_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput">firewall_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput">ipv6_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput">lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.macInput">mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.securityGroupsIdsInput">security_groups_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive">firewall_active</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall"></a>

```python
firewall: ServerNicFirewallList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput"></a>

```python
dhcp_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dhcpv6_input`<sup>Optional</sup> <a name="dhcpv6_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input"></a>

```python
dhcpv6_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `firewall_active_input`<sup>Optional</sup> <a name="firewall_active_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput"></a>

```python
firewall_active_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput"></a>

```python
firewall_input: IResolvable | typing.List[ServerNicFirewall]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>]

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_ips_input`<sup>Optional</sup> <a name="ipv6_ips_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput"></a>

```python
ipv6_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan_input`<sup>Optional</sup> <a name="lan_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput"></a>

```python
lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mac_input`<sup>Optional</sup> <a name="mac_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.macInput"></a>

```python
mac_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_groups_ids_input`<sup>Optional</sup> <a name="security_groups_ids_input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.securityGroupsIdsInput"></a>

```python
security_groups_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp"></a>

```python
dhcp: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6"></a>

```python
dhcpv6: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `firewall_active`<sup>Required</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive"></a>

```python
firewall_active: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_ips`<sup>Required</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_groups_ids`<sup>Required</sup> <a name="security_groups_ids" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue"></a>

```python
internal_value: ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---


### ServerTimeoutsOutputReference <a name="ServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---


### ServerVolumeOutputReference <a name="ServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server

server.ServerVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId">reset_backup_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus">reset_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetExposeSerial">reset_expose_serial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType">reset_licence_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath">reset_ssh_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_unit_id` <a name="reset_backup_unit_id" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId"></a>

```python
def reset_backup_unit_id() -> None
```

##### `reset_bus` <a name="reset_bus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus"></a>

```python
def reset_bus() -> None
```

##### `reset_expose_serial` <a name="reset_expose_serial" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetExposeSerial"></a>

```python
def reset_expose_serial() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_licence_type` <a name="reset_licence_type" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType"></a>

```python
def reset_licence_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_ssh_key_path` <a name="reset_ssh_key_path" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath"></a>

```python
def reset_ssh_key_path() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer">boot_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug">cpu_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug">disc_virtio_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug">disc_virtio_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug">nic_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug">nic_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug">ram_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput">backup_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput">bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.exposeSerialInput">expose_serial_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput">licence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput">ssh_key_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus">bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.exposeSerial">expose_serial</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType">licence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_server`<sup>Required</sup> <a name="boot_server" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer"></a>

```python
boot_server: str
```

- *Type:* str

---

##### `cpu_hot_plug`<sup>Required</sup> <a name="cpu_hot_plug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug"></a>

```python
cpu_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disc_virtio_hot_plug`<sup>Required</sup> <a name="disc_virtio_hot_plug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```python
disc_virtio_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disc_virtio_hot_unplug`<sup>Required</sup> <a name="disc_virtio_hot_unplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```python
disc_virtio_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_plug`<sup>Required</sup> <a name="nic_hot_plug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug"></a>

```python
nic_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_unplug`<sup>Required</sup> <a name="nic_hot_unplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug"></a>

```python
nic_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_hot_plug`<sup>Required</sup> <a name="ram_hot_plug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug"></a>

```python
ram_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_unit_id_input`<sup>Optional</sup> <a name="backup_unit_id_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput"></a>

```python
backup_unit_id_input: str
```

- *Type:* str

---

##### `bus_input`<sup>Optional</sup> <a name="bus_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput"></a>

```python
bus_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `expose_serial_input`<sup>Optional</sup> <a name="expose_serial_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.exposeSerialInput"></a>

```python
expose_serial_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `licence_type_input`<sup>Optional</sup> <a name="licence_type_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput"></a>

```python
licence_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_key_path_input`<sup>Optional</sup> <a name="ssh_key_path_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput"></a>

```python
ssh_key_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_unit_id`<sup>Required</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus"></a>

```python
bus: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `expose_serial`<sup>Required</sup> <a name="expose_serial" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.exposeSerial"></a>

```python
expose_serial: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `licence_type`<sup>Required</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_key_path`<sup>Required</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---



