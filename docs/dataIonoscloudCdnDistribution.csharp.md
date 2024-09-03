# `dataIonoscloudCdnDistribution` Submodule <a name="`dataIonoscloudCdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudCdnDistribution <a name="DataIonoscloudCdnDistribution" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistribution(Construct Scope, string Id, DataIonoscloudCdnDistributionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig">DataIonoscloudCdnDistributionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig">DataIonoscloudCdnDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch">ResetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts"></a>

```csharp
private void PutTimeouts(DataIonoscloudCdnDistributionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartialMatch` <a name="ResetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch"></a>

```csharp
private void ResetPartialMatch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudCdnDistribution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudCdnDistribution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudCdnDistribution.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudCdnDistribution.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudCdnDistribution to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudCdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudCdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules">RoutingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput">PartialMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch">PartialMatch</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRulesList RoutingRules { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts"></a>

```csharp
public DataIonoscloudCdnDistributionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartialMatchInput`<sup>Optional</sup> <a name="PartialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput"></a>

```csharp
public object PartialMatchInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PartialMatch`<sup>Required</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch"></a>

```csharp
public object PartialMatch { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudCdnDistributionConfig <a name="DataIonoscloudCdnDistributionConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain = null,
    string Id = null,
    object PartialMatch = null,
    DataIonoscloudCdnDistributionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain">Domain</a></code> | <code>string</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch">PartialMatch</a></code> | <code>object</code> | Whether partial matching is allowed or not when using domain argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#domain DataIonoscloudCdnDistribution#domain}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartialMatch`<sup>Optional</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch"></a>

```csharp
public object PartialMatch { get; set; }
```

- *Type:* object

Whether partial matching is allowed or not when using domain argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#partial_match DataIonoscloudCdnDistribution#partial_match}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts"></a>

```csharp
public DataIonoscloudCdnDistributionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#timeouts DataIonoscloudCdnDistribution#timeouts}

---

### DataIonoscloudCdnDistributionRoutingRules <a name="DataIonoscloudCdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRules {

};
```


### DataIonoscloudCdnDistributionRoutingRulesUpstream <a name="DataIonoscloudCdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstream {

};
```


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions {

};
```


### DataIonoscloudCdnDistributionTimeouts <a name="DataIonoscloudCdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudCdnDistributionRoutingRulesList <a name="DataIonoscloudCdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get"></a>

```csharp
private DataIonoscloudCdnDistributionRoutingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRulesUpstreamList Upstream { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get"></a>

```csharp
private DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">AllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">BlockList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowList`<sup>Required</sup> <a name="AllowList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```csharp
public string[] AllowList { get; }
```

- *Type:* string[]

---

##### `BlockList`<sup>Required</sup> <a name="BlockList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```csharp
public string[] BlockList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get"></a>

```csharp
private DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching">Caching</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">RateLimitClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf">Waf</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```csharp
public IResolvable Caching { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GeoRestrictions`<sup>Required</sup> <a name="GeoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList GeoRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `RateLimitClass`<sup>Required</sup> <a name="RateLimitClass" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```csharp
public string RateLimitClass { get; }
```

- *Type:* string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```csharp
public IResolvable Waf { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```csharp
public DataIonoscloudCdnDistributionRoutingRulesUpstream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a>

---


### DataIonoscloudCdnDistributionTimeoutsOutputReference <a name="DataIonoscloudCdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudCdnDistributionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



