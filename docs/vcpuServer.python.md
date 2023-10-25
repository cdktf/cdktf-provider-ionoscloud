# `ionoscloud_vcpu_server`

Refer to the Terraform Registory for docs: [`ionoscloud_vcpu_server`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server).

# `vcpuServer` Submodule <a name="`vcpuServer` Submodule" id="@cdktf/provider-ionoscloud.vcpuServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VcpuServer <a name="VcpuServer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server ionoscloud_vcpu_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cores: typing.Union[int, float],
  datacenter_id: str,
  name: str,
  ram: typing.Union[int, float],
  volume: VcpuServerVolume,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  firewallrule_ids: typing.List[str] = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  label: typing.Union[IResolvable, typing.List[VcpuServerLabel]] = None,
  nic: VcpuServerNic = None,
  ssh_keys: typing.List[str] = None,
  timeouts: VcpuServerTimeouts = None,
  vm_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#cores VcpuServer#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ram VcpuServer#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.bootCdrom">boot_cdrom</a></code> | <code>str</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#id VcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_name VcpuServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_password VcpuServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.label">label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.vmState">vm_state</a></code> | <code>str</code> | Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#cores VcpuServer#cores}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ram VcpuServer#ram}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#volume VcpuServer#volume}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.bootCdrom"></a>

- *Type:* str

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that can be retrieved using the ionoscloud_image data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_cdrom VcpuServer#boot_cdrom}

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.bootImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}.

---

##### `firewallrule_ids`<sup>Optional</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.firewallruleIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#id VcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_name VcpuServer#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.imagePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_password VcpuServer#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.label"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#label VcpuServer#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.nic"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#nic VcpuServer#nic}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ssh_keys VcpuServer#ssh_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#timeouts VcpuServer#timeouts}

---

##### `vm_state`<sup>Optional</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.vmState"></a>

- *Type:* str

Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#vm_state VcpuServer#vm_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel">put_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic">put_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom">reset_boot_cdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage">reset_boot_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds">reset_firewallrule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic">reset_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState">reset_vm_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_label` <a name="put_label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel"></a>

```python
def put_label(
  value: typing.Union[IResolvable, typing.List[VcpuServerLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]

---

##### `put_nic` <a name="put_nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic"></a>

```python
def put_nic(
  lan: typing.Union[int, float],
  dhcp: typing.Union[bool, IResolvable] = None,
  dhcpv6: typing.Union[bool, IResolvable] = None,
  firewall: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]] = None,
  firewall_active: typing.Union[bool, IResolvable] = None,
  firewall_type: str = None,
  ips: typing.List[str] = None,
  ipv6_cidr_block: str = None,
  ipv6_ips: typing.List[str] = None,
  name: str = None
) -> None
```

###### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.lan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#lan VcpuServer#lan}.

---

###### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.dhcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}.

---

###### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.dhcpv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}.

---

###### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.firewall"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall VcpuServer#firewall}

---

###### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.firewallActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}.

---

###### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.firewallType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}.

---

###### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.ips"></a>

- *Type:* typing.List[str]

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ips VcpuServer#ips}

---

###### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}.

---

###### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.ipv6Ips"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#create VcpuServer#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#default VcpuServer#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#delete VcpuServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#update VcpuServer#update}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume"></a>

```python
def put_volume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  licence_type: str = None,
  name: str = None,
  size: typing.Union[int, float] = None,
  user_data: str = None
) -> None
```

###### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.diskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

###### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.backupUnitId"></a>

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#backup_unit_id VcpuServer#backup_unit_id}

---

###### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.bus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#bus VcpuServer#bus}.

---

###### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.licenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#size VcpuServer#size}

---

###### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.userData"></a>

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#user_data VcpuServer#user_data}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_boot_cdrom` <a name="reset_boot_cdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom"></a>

```python
def reset_boot_cdrom() -> None
```

##### `reset_boot_image` <a name="reset_boot_image" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage"></a>

```python
def reset_boot_image() -> None
```

##### `reset_firewallrule_ids` <a name="reset_firewallrule_ids" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds"></a>

```python
def reset_firewallrule_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_nic` <a name="reset_nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic"></a>

```python
def reset_nic() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vm_state` <a name="reset_vm_state" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState"></a>

```python
def reset_vm_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VcpuServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VcpuServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VcpuServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume">boot_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId">firewallrule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds">inline_volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label">label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic">primary_nic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput">boot_cdrom_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput">boot_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput">firewallrule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput">label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput">nic_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput">vm_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput">volume_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage">boot_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState">vm_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boot_volume`<sup>Required</sup> <a name="boot_volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume"></a>

```python
boot_volume: str
```

- *Type:* str

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `firewallrule_id`<sup>Required</sup> <a name="firewallrule_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId"></a>

```python
firewallrule_id: str
```

- *Type:* str

---

##### `inline_volume_ids`<sup>Required</sup> <a name="inline_volume_ids" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds"></a>

```python
inline_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label"></a>

```python
label: VcpuServerLabelList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a>

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic"></a>

```python
nic: VcpuServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a>

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `primary_nic`<sup>Required</sup> <a name="primary_nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic"></a>

```python
primary_nic: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts"></a>

```python
timeouts: VcpuServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume"></a>

```python
volume: VcpuServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `boot_cdrom_input`<sup>Optional</sup> <a name="boot_cdrom_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput"></a>

```python
boot_cdrom_input: str
```

- *Type:* str

---

##### `boot_image_input`<sup>Optional</sup> <a name="boot_image_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput"></a>

```python
boot_image_input: str
```

- *Type:* str

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `firewallrule_ids_input`<sup>Optional</sup> <a name="firewallrule_ids_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput"></a>

```python
firewallrule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput"></a>

```python
label_input: typing.Union[IResolvable, typing.List[VcpuServerLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nic_input`<sup>Optional</sup> <a name="nic_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput"></a>

```python
nic_input: VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VcpuServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>]

---

##### `vm_state_input`<sup>Optional</sup> <a name="vm_state_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput"></a>

```python
vm_state_input: str
```

- *Type:* str

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput"></a>

```python
volume_input: VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `boot_cdrom`<sup>Required</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

---

##### `boot_image`<sup>Required</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `firewallrule_ids`<sup>Required</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds"></a>

```python
firewallrule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_state`<sup>Required</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState"></a>

```python
vm_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VcpuServerConfig <a name="VcpuServerConfig" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cores: typing.Union[int, float],
  datacenter_id: str,
  name: str,
  ram: typing.Union[int, float],
  volume: VcpuServerVolume,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  firewallrule_ids: typing.List[str] = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  label: typing.Union[IResolvable, typing.List[VcpuServerLabel]] = None,
  nic: VcpuServerNic = None,
  ssh_keys: typing.List[str] = None,
  timeouts: VcpuServerTimeouts = None,
  vm_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#cores VcpuServer#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ram VcpuServer#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds">firewallrule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#id VcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_name VcpuServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_password VcpuServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label">label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState">vm_state</a></code> | <code>str</code> | Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#cores VcpuServer#cores}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ram VcpuServer#ram}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume"></a>

```python
volume: VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#volume VcpuServer#volume}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that can be retrieved using the ionoscloud_image data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_cdrom VcpuServer#boot_cdrom}

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}.

---

##### `firewallrule_ids`<sup>Optional</sup> <a name="firewallrule_ids" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds"></a>

```python
firewallrule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#id VcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_name VcpuServer#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#image_password VcpuServer#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label"></a>

```python
label: typing.Union[IResolvable, typing.List[VcpuServerLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#label VcpuServer#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic"></a>

```python
nic: VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#nic VcpuServer#nic}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ssh_keys VcpuServer#ssh_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts"></a>

```python
timeouts: VcpuServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#timeouts VcpuServer#timeouts}

---

##### `vm_state`<sup>Optional</sup> <a name="vm_state" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState"></a>

```python
vm_state: str
```

- *Type:* str

Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#vm_state VcpuServer#vm_state}

---

### VcpuServerLabel <a name="VcpuServerLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerLabel(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#key VcpuServer#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#value VcpuServer#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#key VcpuServer#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#value VcpuServer#value}.

---

### VcpuServerNic <a name="VcpuServerNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerNic(
  lan: typing.Union[int, float],
  dhcp: typing.Union[bool, IResolvable] = None,
  dhcpv6: typing.Union[bool, IResolvable] = None,
  firewall: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]] = None,
  firewall_active: typing.Union[bool, IResolvable] = None,
  firewall_type: str = None,
  ips: typing.List[str] = None,
  ipv6_cidr_block: str = None,
  ipv6_ips: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#lan VcpuServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6">dhcpv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall">firewall</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]</code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive">firewall_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType">firewall_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips">ips</a></code> | <code>typing.List[str]</code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#lan VcpuServer#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6"></a>

```python
dhcpv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall"></a>

```python
firewall: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall VcpuServer#firewall}

---

##### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive"></a>

```python
firewall_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}.

---

##### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ips VcpuServer#ips}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}.

---

##### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

### VcpuServerNicFirewall <a name="VcpuServerNicFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerNicFirewall(
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
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#protocol VcpuServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#type VcpuServer#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#protocol VcpuServer#protocol}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#type VcpuServer#type}.

---

### VcpuServerTimeouts <a name="VcpuServerTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#create VcpuServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#default VcpuServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#delete VcpuServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#update VcpuServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#create VcpuServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#default VcpuServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#delete VcpuServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#update VcpuServer#update}.

---

### VcpuServerVolume <a name="VcpuServerVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerVolume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  licence_type: str = None,
  name: str = None,
  size: typing.Union[int, float] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType">disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus">bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#bus VcpuServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType">licence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData">user_data</a></code> | <code>str</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#backup_unit_id VcpuServer#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus"></a>

```python
bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#bus VcpuServer#bus}.

---

##### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#size VcpuServer#size}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData"></a>

```python
user_data: str
```

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.10/docs/resources/vcpu_server#user_data VcpuServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### VcpuServerLabelList <a name="VcpuServerLabelList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VcpuServerLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VcpuServerLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]]

---


### VcpuServerLabelOutputReference <a name="VcpuServerLabelOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VcpuServerLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>]

---


### VcpuServerNicFirewallList <a name="VcpuServerNicFirewallList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerNicFirewallList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VcpuServerNicFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]

---


### VcpuServerNicFirewallOutputReference <a name="VcpuServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerNicFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd">reset_port_range_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart">reset_port_range_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac">reset_source_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_range_end` <a name="reset_port_range_end" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```python
def reset_port_range_end() -> None
```

##### `reset_port_range_start` <a name="reset_port_range_start" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart"></a>

```python
def reset_port_range_start() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_source_mac` <a name="reset_source_mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac"></a>

```python
def reset_source_mac() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput">port_range_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput">port_range_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput">source_mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput">target_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode">icmp_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac">source_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp">target_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_range_end_input`<sup>Optional</sup> <a name="port_range_end_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```python
port_range_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start_input`<sup>Optional</sup> <a name="port_range_start_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```python
port_range_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `source_mac_input`<sup>Optional</sup> <a name="source_mac_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput"></a>

```python
source_mac_input: str
```

- *Type:* str

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput"></a>

```python
target_ip_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_range_end`<sup>Required</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start`<sup>Required</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `source_mac`<sup>Required</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VcpuServerNicFirewall]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]

---


### VcpuServerNicOutputReference <a name="VcpuServerNicOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerNicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall">put_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6">reset_dhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall">reset_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive">reset_firewall_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType">reset_firewall_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps">reset_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips">reset_ipv6_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall` <a name="put_firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall"></a>

```python
def put_firewall(
  value: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]

---

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_dhcpv6` <a name="reset_dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6"></a>

```python
def reset_dhcpv6() -> None
```

##### `reset_firewall` <a name="reset_firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall"></a>

```python
def reset_firewall() -> None
```

##### `reset_firewall_active` <a name="reset_firewall_active" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive"></a>

```python
def reset_firewall_active() -> None
```

##### `reset_firewall_type` <a name="reset_firewall_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType"></a>

```python
def reset_firewall_type() -> None
```

##### `reset_ips` <a name="reset_ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps"></a>

```python
def reset_ips() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_ips` <a name="reset_ipv6_ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips"></a>

```python
def reset_ipv6_ips() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input">dhcpv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput">firewall_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput">firewall_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput">ipv6_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput">lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive">firewall_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall"></a>

```python
firewall: VcpuServerNicFirewallList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcpv6_input`<sup>Optional</sup> <a name="dhcpv6_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input"></a>

```python
dhcpv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_active_input`<sup>Optional</sup> <a name="firewall_active_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput"></a>

```python
firewall_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput"></a>

```python
firewall_input: typing.Union[IResolvable, typing.List[VcpuServerNicFirewall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>]]

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_ips_input`<sup>Optional</sup> <a name="ipv6_ips_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput"></a>

```python
ipv6_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan_input`<sup>Optional</sup> <a name="lan_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput"></a>

```python
lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6"></a>

```python
dhcpv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_active`<sup>Required</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive"></a>

```python
firewall_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_ips`<sup>Required</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue"></a>

```python
internal_value: VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---


### VcpuServerTimeoutsOutputReference <a name="VcpuServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VcpuServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>]

---


### VcpuServerVolumeOutputReference <a name="VcpuServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vcpu_server

vcpuServer.VcpuServerVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId">reset_backup_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus">reset_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType">reset_licence_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_unit_id` <a name="reset_backup_unit_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId"></a>

```python
def reset_backup_unit_id() -> None
```

##### `reset_bus` <a name="reset_bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus"></a>

```python
def reset_bus() -> None
```

##### `reset_licence_type` <a name="reset_licence_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType"></a>

```python
def reset_licence_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer">boot_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug">cpu_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug">disc_virtio_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug">disc_virtio_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug">nic_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug">nic_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug">ram_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput">backup_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput">bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput">licence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus">bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType">licence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_server`<sup>Required</sup> <a name="boot_server" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer"></a>

```python
boot_server: str
```

- *Type:* str

---

##### `cpu_hot_plug`<sup>Required</sup> <a name="cpu_hot_plug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug"></a>

```python
cpu_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disc_virtio_hot_plug`<sup>Required</sup> <a name="disc_virtio_hot_plug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```python
disc_virtio_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disc_virtio_hot_unplug`<sup>Required</sup> <a name="disc_virtio_hot_unplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```python
disc_virtio_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_plug`<sup>Required</sup> <a name="nic_hot_plug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug"></a>

```python
nic_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_unplug`<sup>Required</sup> <a name="nic_hot_unplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug"></a>

```python
nic_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_hot_plug`<sup>Required</sup> <a name="ram_hot_plug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug"></a>

```python
ram_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_unit_id_input`<sup>Optional</sup> <a name="backup_unit_id_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput"></a>

```python
backup_unit_id_input: str
```

- *Type:* str

---

##### `bus_input`<sup>Optional</sup> <a name="bus_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput"></a>

```python
bus_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `licence_type_input`<sup>Optional</sup> <a name="licence_type_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput"></a>

```python
licence_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_unit_id`<sup>Required</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus"></a>

```python
bus: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `licence_type`<sup>Required</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue"></a>

```python
internal_value: VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---



