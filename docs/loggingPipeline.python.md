# `loggingPipeline` Submodule <a name="`loggingPipeline` Submodule" id="@cdktf/provider-ionoscloud.loggingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingPipeline <a name="LoggingPipeline" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline ionoscloud_logging_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log: typing.Union[IResolvable, typing.List[LoggingPipelineLog]],
  name: str,
  id: str = None,
  location: str = None,
  timeouts: LoggingPipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.log">log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]</code> | log block. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#name LoggingPipeline#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#id LoggingPipeline#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of your logging pipeline. Default: de/txl. Supported locations: de/fra, de/txl, es/vit, gb/lhr, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.log"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#log LoggingPipeline#log}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#name LoggingPipeline#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#id LoggingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.location"></a>

- *Type:* str

The location of your logging pipeline. Default: de/txl. Supported locations: de/fra, de/txl, es/vit, gb/lhr, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#location LoggingPipeline#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#timeouts LoggingPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putLog">put_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log` <a name="put_log" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putLog"></a>

```python
def put_log(
  value: typing.Union[IResolvable, typing.List[LoggingPipelineLog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putLog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#create LoggingPipeline#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#default LoggingPipeline#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#delete LoggingPipeline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#update LoggingPipeline#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoggingPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoggingPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoggingPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoggingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.grafanaAddress">grafana_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.log">log</a></code> | <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList">LoggingPipelineLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference">LoggingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.logInput">log_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grafana_address`<sup>Required</sup> <a name="grafana_address" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.grafanaAddress"></a>

```python
grafana_address: str
```

- *Type:* str

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.log"></a>

```python
log: LoggingPipelineLogList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList">LoggingPipelineLogList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.timeouts"></a>

```python
timeouts: LoggingPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference">LoggingPipelineTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_input`<sup>Optional</sup> <a name="log_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.logInput"></a>

```python
log_input: typing.Union[IResolvable, typing.List[LoggingPipelineLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoggingPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingPipelineConfig <a name="LoggingPipelineConfig" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log: typing.Union[IResolvable, typing.List[LoggingPipelineLog]],
  name: str,
  id: str = None,
  location: str = None,
  timeouts: LoggingPipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.log">log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]</code> | log block. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#name LoggingPipeline#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#id LoggingPipeline#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.location">location</a></code> | <code>str</code> | The location of your logging pipeline. Default: de/txl. Supported locations: de/fra, de/txl, es/vit, gb/lhr, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.log"></a>

```python
log: typing.Union[IResolvable, typing.List[LoggingPipelineLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#log LoggingPipeline#log}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#name LoggingPipeline#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#id LoggingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of your logging pipeline. Default: de/txl. Supported locations: de/fra, de/txl, es/vit, gb/lhr, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#location LoggingPipeline#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineConfig.property.timeouts"></a>

```python
timeouts: LoggingPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#timeouts LoggingPipeline#timeouts}

---

### LoggingPipelineLog <a name="LoggingPipelineLog" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLog(
  protocol: str,
  source: str,
  tag: str,
  destinations: typing.Union[IResolvable, typing.List[LoggingPipelineLogDestinations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.protocol">protocol</a></code> | <code>str</code> | Protocol to use as intake. Possible values are: http, tcp. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.source">source</a></code> | <code>str</code> | The source parser to be used. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.tag">tag</a></code> | <code>str</code> | The tag is used to distinguish different pipelines. Must be unique amongst the pipeline's array items. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]</code> | destinations block. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Protocol to use as intake. Possible values are: http, tcp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#protocol LoggingPipeline#protocol}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.source"></a>

```python
source: str
```

- *Type:* str

The source parser to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#source LoggingPipeline#source}

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag is used to distinguish different pipelines. Must be unique amongst the pipeline's array items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#tag LoggingPipeline#tag}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[LoggingPipelineLogDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#destinations LoggingPipeline#destinations}

---

### LoggingPipelineLogDestinations <a name="LoggingPipelineLogDestinations" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLogDestinations(
  retention_in_days: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Defines the number of days a log record should be kept in loki. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#type LoggingPipeline#type}. |

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the number of days a log record should be kept in loki.

Works with loki destination type only. Possible values are: 7, 14, 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#retention_in_days LoggingPipeline#retention_in_days}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#type LoggingPipeline#type}.

---

### LoggingPipelineTimeouts <a name="LoggingPipelineTimeouts" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#create LoggingPipeline#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#default LoggingPipeline#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#delete LoggingPipeline#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#update LoggingPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#create LoggingPipeline#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#default LoggingPipeline#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#delete LoggingPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/logging_pipeline#update LoggingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingPipelineLogDestinationsList <a name="LoggingPipelineLogDestinationsList" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLogDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingPipelineLogDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingPipelineLogDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]

---


### LoggingPipelineLogDestinationsOutputReference <a name="LoggingPipelineLogDestinationsOutputReference" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLogDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingPipelineLogDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]

---


### LoggingPipelineLogList <a name="LoggingPipelineLogList" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingPipelineLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingPipelineLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]]

---


### LoggingPipelineLogOutputReference <a name="LoggingPipelineLogOutputReference" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[LoggingPipelineLogDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList">LoggingPipelineLogDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.destinations"></a>

```python
destinations: LoggingPipelineLogDestinationsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinationsList">LoggingPipelineLogDestinationsList</a>

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.public"></a>

```python
public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[LoggingPipelineLogDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogDestinations">LoggingPipelineLogDestinations</a>]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingPipelineLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineLog">LoggingPipelineLog</a>]

---


### LoggingPipelineTimeoutsOutputReference <a name="LoggingPipelineTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import logging_pipeline

loggingPipeline.LoggingPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.loggingPipeline.LoggingPipelineTimeouts">LoggingPipelineTimeouts</a>]

---



