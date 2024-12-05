# `serverBootDeviceSelection` Submodule <a name="`serverBootDeviceSelection` Submodule" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerBootDeviceSelection <a name="ServerBootDeviceSelection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection ionoscloud_server_boot_device_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelection(
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
  server_id: str,
  boot_device_id: str = None,
  id: str = None,
  timeouts: ServerBootDeviceSelectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | ID of the Datacenter that holds the server for which the boot volume is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | ID of the Server for which the boot device will be selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.bootDeviceId">boot_device_id</a></code> | <code>str</code> | ID of the entity to set as primary boot device. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.datacenterId"></a>

- *Type:* str

ID of the Datacenter that holds the server for which the boot volume is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#datacenter_id ServerBootDeviceSelection#datacenter_id}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.serverId"></a>

- *Type:* str

ID of the Server for which the boot device will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#server_id ServerBootDeviceSelection#server_id}

---

##### `boot_device_id`<sup>Optional</sup> <a name="boot_device_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.bootDeviceId"></a>

- *Type:* str

ID of the entity to set as primary boot device.

Possible boot devices are CDROM Images and Volumes. If omitted, server will boot from PXE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#boot_device_id ServerBootDeviceSelection#boot_device_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#timeouts ServerBootDeviceSelection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId">reset_boot_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}.

---

##### `reset_boot_device_id` <a name="reset_boot_device_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId"></a>

```python
def reset_boot_device_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServerBootDeviceSelection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServerBootDeviceSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServerBootDeviceSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId">default_boot_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput">boot_device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId">boot_device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_boot_volume_id`<sup>Required</sup> <a name="default_boot_volume_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId"></a>

```python
default_boot_volume_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts"></a>

```python
timeouts: ServerBootDeviceSelectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a>

---

##### `boot_device_id_input`<sup>Optional</sup> <a name="boot_device_id_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput"></a>

```python
boot_device_id_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServerBootDeviceSelectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>]

---

##### `boot_device_id`<sup>Required</sup> <a name="boot_device_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId"></a>

```python
boot_device_id: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServerBootDeviceSelectionConfig <a name="ServerBootDeviceSelectionConfig" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  server_id: str,
  boot_device_id: str = None,
  id: str = None,
  timeouts: ServerBootDeviceSelectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | ID of the Datacenter that holds the server for which the boot volume is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId">server_id</a></code> | <code>str</code> | ID of the Server for which the boot device will be selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId">boot_device_id</a></code> | <code>str</code> | ID of the entity to set as primary boot device. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

ID of the Datacenter that holds the server for which the boot volume is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#datacenter_id ServerBootDeviceSelection#datacenter_id}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

ID of the Server for which the boot device will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#server_id ServerBootDeviceSelection#server_id}

---

##### `boot_device_id`<sup>Optional</sup> <a name="boot_device_id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId"></a>

```python
boot_device_id: str
```

- *Type:* str

ID of the entity to set as primary boot device.

Possible boot devices are CDROM Images and Volumes. If omitted, server will boot from PXE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#boot_device_id ServerBootDeviceSelection#boot_device_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts"></a>

```python
timeouts: ServerBootDeviceSelectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#timeouts ServerBootDeviceSelection#timeouts}

---

### ServerBootDeviceSelectionTimeouts <a name="ServerBootDeviceSelectionTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerBootDeviceSelectionTimeoutsOutputReference <a name="ServerBootDeviceSelectionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import server_boot_device_selection

serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServerBootDeviceSelectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>]

---



