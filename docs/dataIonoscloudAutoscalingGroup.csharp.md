# `dataIonoscloudAutoscalingGroup` Submodule <a name="`dataIonoscloudAutoscalingGroup` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudAutoscalingGroup <a name="DataIonoscloudAutoscalingGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group ionoscloud_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroup(Construct Scope, string Id, DataIonoscloudAutoscalingGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig">DataIonoscloudAutoscalingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig">DataIonoscloudAutoscalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DataIonoscloudAutoscalingGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudAutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudAutoscalingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudAutoscalingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudAutoscalingGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudAutoscalingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudAutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudAutoscalingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudAutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudAutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList">DataIonoscloudAutoscalingGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList">DataIonoscloudAutoscalingGroupReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference">DataIonoscloudAutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; }
```

- *Type:* double

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; }
```

- *Type:* double

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.policy"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList">DataIonoscloudAutoscalingGroupPolicyList</a>

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.replicaConfiguration"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationList ReplicaConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList">DataIonoscloudAutoscalingGroupReplicaConfigurationList</a>

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.targetReplicaCount"></a>

```csharp
public double TargetReplicaCount { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeouts"></a>

```csharp
public DataIonoscloudAutoscalingGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference">DataIonoscloudAutoscalingGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudAutoscalingGroupConfig <a name="DataIonoscloudAutoscalingGroupConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    DataIonoscloudAutoscalingGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.id">Id</a></code> | <code>string</code> | UUID of the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.name">Name</a></code> | <code>string</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

UUID of the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#id DataIonoscloudAutoscalingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#name DataIonoscloudAutoscalingGroup#name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.timeouts"></a>

```csharp
public DataIonoscloudAutoscalingGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#timeouts DataIonoscloudAutoscalingGroup#timeouts}

---

### DataIonoscloudAutoscalingGroupPolicy <a name="DataIonoscloudAutoscalingGroupPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicy {

};
```


### DataIonoscloudAutoscalingGroupPolicyScaleInAction <a name="DataIonoscloudAutoscalingGroupPolicyScaleInAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleInAction {

};
```


### DataIonoscloudAutoscalingGroupPolicyScaleOutAction <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleOutAction {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfiguration <a name="DataIonoscloudAutoscalingGroupReplicaConfiguration" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfiguration {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationNic <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNic" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNic {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup {

};
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolume <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolume" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationVolume {

};
```


### DataIonoscloudAutoscalingGroupTimeouts <a name="DataIonoscloudAutoscalingGroupTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#create DataIonoscloudAutoscalingGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#default DataIonoscloudAutoscalingGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#delete DataIonoscloudAutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#update DataIonoscloudAutoscalingGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#create DataIonoscloudAutoscalingGroup#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#default DataIonoscloudAutoscalingGroup#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#delete DataIonoscloudAutoscalingGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/autoscaling_group#update DataIonoscloudAutoscalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudAutoscalingGroupPolicyList <a name="DataIonoscloudAutoscalingGroupPolicyList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupPolicyOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInAction">ScaleInAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList">DataIonoscloudAutoscalingGroupPolicyScaleInActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInThreshold">ScaleInThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutAction">ScaleOutAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList">DataIonoscloudAutoscalingGroupPolicyScaleOutActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutThreshold">ScaleOutThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy">DataIonoscloudAutoscalingGroupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `ScaleInAction`<sup>Required</sup> <a name="ScaleInAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInAction"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicyScaleInActionList ScaleInAction { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList">DataIonoscloudAutoscalingGroupPolicyScaleInActionList</a>

---

##### `ScaleInThreshold`<sup>Required</sup> <a name="ScaleInThreshold" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInThreshold"></a>

```csharp
public double ScaleInThreshold { get; }
```

- *Type:* double

---

##### `ScaleOutAction`<sup>Required</sup> <a name="ScaleOutAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutAction"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicyScaleOutActionList ScaleOutAction { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList">DataIonoscloudAutoscalingGroupPolicyScaleOutActionList</a>

---

##### `ScaleOutThreshold`<sup>Required</sup> <a name="ScaleOutThreshold" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutThreshold"></a>

```csharp
public double ScaleOutThreshold { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy">DataIonoscloudAutoscalingGroupPolicy</a>

---


### DataIonoscloudAutoscalingGroupPolicyScaleInActionList <a name="DataIonoscloudAutoscalingGroupPolicyScaleInActionList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleInActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amountType">AmountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes">DeleteVolumes</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType">TerminationPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction">DataIonoscloudAutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amountType"></a>

```csharp
public string AmountType { get; }
```

- *Type:* string

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod"></a>

```csharp
public string CooldownPeriod { get; }
```

- *Type:* string

---

##### `DeleteVolumes`<sup>Required</sup> <a name="DeleteVolumes" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes"></a>

```csharp
public IResolvable DeleteVolumes { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerminationPolicyType`<sup>Required</sup> <a name="TerminationPolicyType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType"></a>

```csharp
public string TerminationPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicyScaleInAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction">DataIonoscloudAutoscalingGroupPolicyScaleInAction</a>

---


### DataIonoscloudAutoscalingGroupPolicyScaleOutActionList <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutActionList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleOutActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType">AmountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction">DataIonoscloudAutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType"></a>

```csharp
public string AmountType { get; }
```

- *Type:* string

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod"></a>

```csharp
public string CooldownPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupPolicyScaleOutAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction">DataIonoscloudAutoscalingGroupPolicyScaleOutAction</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac">SourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp">TargetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd"></a>

```csharp
public double PortRangeEnd { get; }
```

- *Type:* double

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart"></a>

```csharp
public double PortRangeStart { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac"></a>

```csharp
public string SourceMac { get; }
```

- *Type:* string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp"></a>

```csharp
public string TargetIp { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRule</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLog</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp">Dhcp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule">FirewallRule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType">FirewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog">FlowLog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.lan">Lan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic">DataIonoscloudAutoscalingGroupReplicaConfigurationNic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp"></a>

```csharp
public IResolvable Dhcp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive"></a>

```csharp
public IResolvable FirewallActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList FirewallRule { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFirewallRuleList</a>

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType"></a>

```csharp
public string FirewallType { get; }
```

- *Type:* string

---

##### `FlowLog`<sup>Required</sup> <a name="FlowLog" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList FlowLog { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicFlowLogList</a>

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.lan"></a>

```csharp
public double Lan { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList TargetGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic">DataIonoscloudAutoscalingGroupReplicaConfigurationNic</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId">TargetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup">DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `TargetGroupId`<sup>Required</sup> <a name="TargetGroupId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId"></a>

```csharp
public string TargetGroupId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup">DataIonoscloudAutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cores">Cores</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily">CpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.ram">Ram</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList">DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration">DataIonoscloudAutoscalingGroupReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cores"></a>

```csharp
public double Cores { get; }
```

- *Type:* double

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily"></a>

```csharp
public string CpuFamily { get; }
```

- *Type:* string

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.nic"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationNicList Nic { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicList</a>

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.ram"></a>

```csharp
public double Ram { get; }
```

- *Type:* double

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.volume"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList">DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration">DataIonoscloudAutoscalingGroupReplicaConfiguration</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get"></a>

```csharp
private DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder">BootOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus">Bus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias">ImageAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume">DataIonoscloudAutoscalingGroupReplicaConfigurationVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId"></a>

```csharp
public string BackupUnitId { get; }
```

- *Type:* string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder"></a>

```csharp
public string BootOrder { get; }
```

- *Type:* string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus"></a>

```csharp
public string Bus { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImageAlias`<sup>Required</sup> <a name="ImageAlias" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias"></a>

```csharp
public string ImageAlias { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudAutoscalingGroupReplicaConfigurationVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume">DataIonoscloudAutoscalingGroupReplicaConfigurationVolume</a>

---


### DataIonoscloudAutoscalingGroupTimeoutsOutputReference <a name="DataIonoscloudAutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudAutoscalingGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



