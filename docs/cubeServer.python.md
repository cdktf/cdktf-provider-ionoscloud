# `ionoscloud_cube_server`

Refer to the Terraform Registory for docs: [`ionoscloud_cube_server`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server).

# `cubeServer` Submodule <a name="`cubeServer` Submodule" id="@cdktf/provider-ionoscloud.cubeServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CubeServer <a name="CubeServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server ionoscloud_cube_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  nic: CubeServerNic,
  template_uuid: str,
  volume: CubeServerVolume,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  ssh_key_path: typing.List[str] = None,
  timeouts: CubeServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.templateUuid">template_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootCdrom">boot_cdrom</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.nic"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#nic CubeServer#nic}

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.templateUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#volume CubeServer#volume}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootCdrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.bootImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.imagePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.sshKeyPath"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic">put_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom">reset_boot_cdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage">reset_boot_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath">reset_ssh_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_nic` <a name="put_nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic"></a>

```python
def put_nic(
  lan: typing.Union[int, float],
  dhcp: typing.Union[bool, IResolvable] = None,
  dhcpv6: typing.Union[bool, IResolvable] = None,
  firewall: CubeServerNicFirewall = None,
  firewall_active: typing.Union[bool, IResolvable] = None,
  firewall_type: str = None,
  ips: typing.List[str] = None,
  ipv6_cidr_block: str = None,
  ipv6_ips: typing.List[str] = None,
  name: str = None
) -> None
```

###### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.lan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#lan CubeServer#lan}.

---

###### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.dhcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

###### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.dhcpv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}

---

###### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.firewall"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall CubeServer#firewall}

---

###### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.firewallActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

###### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.firewallType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

###### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.ips"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ips CubeServer#ips}.

---

###### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.ipv6CidrBlock"></a>

- *Type:* str

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}

---

###### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.ipv6Ips"></a>

- *Type:* typing.List[str]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#create CubeServer#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#default CubeServer#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#delete CubeServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#update CubeServer#update}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume"></a>

```python
def put_volume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  image_password: str = None,
  licence_type: str = None,
  name: str = None,
  ssh_key_path: typing.List[str] = None,
  user_data: str = None
) -> None
```

###### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.diskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

###### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.backupUnitId"></a>

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

###### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.bus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#bus CubeServer#bus}.

---

###### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.imagePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}.

---

###### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.licenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

###### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.sshKeyPath"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

###### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.userData"></a>

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#user_data CubeServer#user_data}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_boot_cdrom` <a name="reset_boot_cdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom"></a>

```python
def reset_boot_cdrom() -> None
```

##### `reset_boot_image` <a name="reset_boot_image" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage"></a>

```python
def reset_boot_image() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_ssh_key_path` <a name="reset_ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath"></a>

```python
def reset_ssh_key_path() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume">boot_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId">firewallrule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic">primary_nic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput">boot_cdrom_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput">boot_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput">nic_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput">ssh_key_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput">template_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput">volume_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage">boot_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid">template_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boot_volume`<sup>Required</sup> <a name="boot_volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume"></a>

```python
boot_volume: str
```

- *Type:* str

---

##### `firewallrule_id`<sup>Required</sup> <a name="firewallrule_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId"></a>

```python
firewallrule_id: str
```

- *Type:* str

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic"></a>

```python
nic: CubeServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a>

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `primary_nic`<sup>Required</sup> <a name="primary_nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic"></a>

```python
primary_nic: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts"></a>

```python
timeouts: CubeServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume"></a>

```python
volume: CubeServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `boot_cdrom_input`<sup>Optional</sup> <a name="boot_cdrom_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput"></a>

```python
boot_cdrom_input: str
```

- *Type:* str

---

##### `boot_image_input`<sup>Optional</sup> <a name="boot_image_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput"></a>

```python
boot_image_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nic_input`<sup>Optional</sup> <a name="nic_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput"></a>

```python
nic_input: CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `ssh_key_path_input`<sup>Optional</sup> <a name="ssh_key_path_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput"></a>

```python
ssh_key_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_uuid_input`<sup>Optional</sup> <a name="template_uuid_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput"></a>

```python
template_uuid_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CubeServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput"></a>

```python
volume_input: CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `boot_cdrom`<sup>Required</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

---

##### `boot_image`<sup>Required</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ssh_key_path`<sup>Required</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CubeServerConfig <a name="CubeServerConfig" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  name: str,
  nic: CubeServerNic,
  template_uuid: str,
  volume: CubeServerVolume,
  availability_zone: str = None,
  boot_cdrom: str = None,
  boot_image: str = None,
  id: str = None,
  image_name: str = None,
  image_password: str = None,
  ssh_key_path: typing.List[str] = None,
  timeouts: CubeServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid">template_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom">boot_cdrom</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage">boot_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic"></a>

```python
nic: CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#nic CubeServer#nic}

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume"></a>

```python
volume: CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#volume CubeServer#volume}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `boot_cdrom`<sup>Optional</sup> <a name="boot_cdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom"></a>

```python
boot_cdrom: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `boot_image`<sup>Optional</sup> <a name="boot_image" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage"></a>

```python
boot_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts"></a>

```python
timeouts: CubeServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

### CubeServerNic <a name="CubeServerNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerNic(
  lan: typing.Union[int, float],
  dhcp: typing.Union[bool, IResolvable] = None,
  dhcpv6: typing.Union[bool, IResolvable] = None,
  firewall: CubeServerNicFirewall = None,
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
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#lan CubeServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#dhcp CubeServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6">dhcpv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive">firewall_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_active CubeServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType">firewall_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_type CubeServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips">ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ips CubeServer#ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#lan CubeServer#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6"></a>

```python
dhcpv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall"></a>

```python
firewall: CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall CubeServer#firewall}

---

##### `firewall_active`<sup>Optional</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive"></a>

```python
firewall_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

##### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ips CubeServer#ips}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}

---

##### `ipv6_ips`<sup>Optional</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

### CubeServerNicFirewall <a name="CubeServerNicFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerNicFirewall(
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
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#protocol CubeServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_code CubeServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_type CubeServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_end CubeServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_start CubeServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_ip CubeServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_mac CubeServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#target_ip CubeServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#type CubeServer#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#protocol CubeServer#protocol}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#type CubeServer#type}.

---

### CubeServerTimeouts <a name="CubeServerTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#create CubeServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#default CubeServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#delete CubeServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#update CubeServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#create CubeServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#default CubeServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#delete CubeServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#update CubeServer#update}.

---

### CubeServerVolume <a name="CubeServerVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerVolume(
  disk_type: str,
  availability_zone: str = None,
  backup_unit_id: str = None,
  bus: str = None,
  image_password: str = None,
  licence_type: str = None,
  name: str = None,
  ssh_key_path: typing.List[str] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType">disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#disk_type CubeServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus">bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#bus CubeServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword">image_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType">licence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#licence_type CubeServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData">user_data</a></code> | <code>str</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus"></a>

```python
bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#bus CubeServer#bus}.

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `licence_type`<sup>Optional</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

##### `ssh_key_path`<sup>Optional</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData"></a>

```python
user_data: str
```

- *Type:* str

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#user_data CubeServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### CubeServerNicFirewallOutputReference <a name="CubeServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerNicFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd">reset_port_range_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart">reset_port_range_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac">reset_source_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_range_end` <a name="reset_port_range_end" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```python
def reset_port_range_end() -> None
```

##### `reset_port_range_start` <a name="reset_port_range_start" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart"></a>

```python
def reset_port_range_start() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_source_mac` <a name="reset_source_mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac"></a>

```python
def reset_source_mac() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput">port_range_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput">port_range_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput">source_mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput">target_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode">icmp_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac">source_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp">target_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_range_end_input`<sup>Optional</sup> <a name="port_range_end_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```python
port_range_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start_input`<sup>Optional</sup> <a name="port_range_start_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```python
port_range_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `source_mac_input`<sup>Optional</sup> <a name="source_mac_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput"></a>

```python
source_mac_input: str
```

- *Type:* str

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput"></a>

```python
target_ip_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_range_end`<sup>Required</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start`<sup>Required</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `source_mac`<sup>Required</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue"></a>

```python
internal_value: CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---


### CubeServerNicOutputReference <a name="CubeServerNicOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerNicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall">put_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6">reset_dhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall">reset_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive">reset_firewall_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType">reset_firewall_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps">reset_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips">reset_ipv6_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall` <a name="put_firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall"></a>

```python
def put_firewall(
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
) -> None
```

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#protocol CubeServer#protocol}.

---

###### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.icmpCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

###### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.icmpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#name CubeServer#name}.

---

###### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.portRangeEnd"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

###### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.portRangeStart"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

###### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.sourceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

###### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.sourceMac"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

###### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.targetIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.8/docs/resources/cube_server#type CubeServer#type}.

---

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_dhcpv6` <a name="reset_dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6"></a>

```python
def reset_dhcpv6() -> None
```

##### `reset_firewall` <a name="reset_firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall"></a>

```python
def reset_firewall() -> None
```

##### `reset_firewall_active` <a name="reset_firewall_active" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive"></a>

```python
def reset_firewall_active() -> None
```

##### `reset_firewall_type` <a name="reset_firewall_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType"></a>

```python
def reset_firewall_type() -> None
```

##### `reset_ips` <a name="reset_ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps"></a>

```python
def reset_ips() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_ips` <a name="reset_ipv6_ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips"></a>

```python
def reset_ipv6_ips() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input">dhcpv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput">firewall_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput">firewall_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput">ipv6_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput">lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive">firewall_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips">ipv6_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall"></a>

```python
firewall: CubeServerNicFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a>

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcpv6_input`<sup>Optional</sup> <a name="dhcpv6_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input"></a>

```python
dhcpv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_active_input`<sup>Optional</sup> <a name="firewall_active_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput"></a>

```python
firewall_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput"></a>

```python
firewall_input: CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_ips_input`<sup>Optional</sup> <a name="ipv6_ips_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput"></a>

```python
ipv6_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan_input`<sup>Optional</sup> <a name="lan_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput"></a>

```python
lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6"></a>

```python
dhcpv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_active`<sup>Required</sup> <a name="firewall_active" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive"></a>

```python
firewall_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_ips`<sup>Required</sup> <a name="ipv6_ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips"></a>

```python
ipv6_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue"></a>

```python
internal_value: CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---


### CubeServerTimeoutsOutputReference <a name="CubeServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CubeServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>]

---


### CubeServerVolumeOutputReference <a name="CubeServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cube_server

cubeServer.CubeServerVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId">reset_backup_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus">reset_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType">reset_licence_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath">reset_ssh_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_unit_id` <a name="reset_backup_unit_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId"></a>

```python
def reset_backup_unit_id() -> None
```

##### `reset_bus` <a name="reset_bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus"></a>

```python
def reset_bus() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_licence_type` <a name="reset_licence_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType"></a>

```python
def reset_licence_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ssh_key_path` <a name="reset_ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath"></a>

```python
def reset_ssh_key_path() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer">boot_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug">cpu_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber">device_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug">disc_virtio_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug">disc_virtio_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug">nic_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug">nic_hot_unplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot">pci_slot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug">ram_hot_plug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput">backup_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput">bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput">licence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput">ssh_key_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus">bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType">licence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath">ssh_key_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_server`<sup>Required</sup> <a name="boot_server" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer"></a>

```python
boot_server: str
```

- *Type:* str

---

##### `cpu_hot_plug`<sup>Required</sup> <a name="cpu_hot_plug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug"></a>

```python
cpu_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_number`<sup>Required</sup> <a name="device_number" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber"></a>

```python
device_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disc_virtio_hot_plug`<sup>Required</sup> <a name="disc_virtio_hot_plug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```python
disc_virtio_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disc_virtio_hot_unplug`<sup>Required</sup> <a name="disc_virtio_hot_unplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```python
disc_virtio_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_plug`<sup>Required</sup> <a name="nic_hot_plug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug"></a>

```python
nic_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nic_hot_unplug`<sup>Required</sup> <a name="nic_hot_unplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug"></a>

```python
nic_hot_unplug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pci_slot`<sup>Required</sup> <a name="pci_slot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot"></a>

```python
pci_slot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_hot_plug`<sup>Required</sup> <a name="ram_hot_plug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug"></a>

```python
ram_hot_plug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_unit_id_input`<sup>Optional</sup> <a name="backup_unit_id_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput"></a>

```python
backup_unit_id_input: str
```

- *Type:* str

---

##### `bus_input`<sup>Optional</sup> <a name="bus_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput"></a>

```python
bus_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `licence_type_input`<sup>Optional</sup> <a name="licence_type_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput"></a>

```python
licence_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ssh_key_path_input`<sup>Optional</sup> <a name="ssh_key_path_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput"></a>

```python
ssh_key_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_unit_id`<sup>Required</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus"></a>

```python
bus: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `licence_type`<sup>Required</sup> <a name="licence_type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType"></a>

```python
licence_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ssh_key_path`<sup>Required</sup> <a name="ssh_key_path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath"></a>

```python
ssh_key_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue"></a>

```python
internal_value: CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---



